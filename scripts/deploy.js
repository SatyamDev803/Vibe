// scripts/deploy.js
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("🚀 Deploying with account:", deployer.address);

  const UserProfile = await hre.ethers.getContractFactory("UserProfile");
  const contract = await UserProfile.deploy();

  await contract.deployed();
  console.log("✅ UserProfile deployed to:", contract.address);

  // Save ABI + address for frontend
  const contractData = {
    address: contract.address,
    abi: JSON.parse(contract.interface.format("json")),
  };

  const contractsDir = __dirname + "/../frontend/src/lib";
  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir, { recursive: true });
  }

  fs.writeFileSync(
    contractsDir + "/contract.json",
    JSON.stringify(contractData, null, 2)
  );

  console.log("📦 ABI + address written to frontend/src/lib/contract.json");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
