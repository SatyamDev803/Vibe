import pkg from "hardhat";
import artifact from "../../artifacts/contracts/UserProfile.sol/UserProfile.json" assert { type: "json" };
import { ethers } from "ethers";

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const contract = new ethers.Contract(CONTRACT_ADDRESS, artifact.abi, provider);

export default contract;
