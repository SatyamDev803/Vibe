require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, BNB_TESTNET_RPC } = process.env;

module.exports = {
  solidity: "0.8.20",
  networks: {
    bsctestnet: {
      url: BNB_TESTNET_RPC,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 97,
    },
  },
};
