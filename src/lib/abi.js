export const userProfileAbi = [
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "profiles",
    "outputs": [
      { "internalType": "string", "name": "name", "type": "string" },
      { "internalType": "string", "name": "bio", "type": "string" },
      { "internalType": "string", "name": "imageHash", "type": "string" },
      { "internalType": "string", "name": "hobby", "type": "string" },
      { "internalType": "uint8", "name": "age", "type": "uint8" },
      { "internalType": "uint256", "name": "createdAt", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getUserCount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_index", "type": "uint256" }],
    "name": "getUserAddressByIndex",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "premiumExpiration",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "becomePremium",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "_name", "type": "string" },
      { "internalType": "string", "name": "_bio", "type": "string" },
      { "internalType": "string", "name": "_imageHash", "type": "string" },
      { "internalType": "string", "name": "_hobby", "type": "string" },
      { "internalType": "uint8", "name": "_age", "type": "uint8" }
    ],
    "name": "createOrUpdateProfile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
