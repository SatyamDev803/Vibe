
# Vibe

Vibe is a decentralized social platform built with React, Vite, and Solidity, enabling users to connect, chat, and match on the Binance Smart Chain (BSC) testnet. The app features wallet-based authentication, on-chain profile management, premium upgrades, and secure chat moderation.

## Features

- **Decentralized User Profiles:** Create and update profiles stored on-chain via smart contracts.
- **Wallet Authentication:** Connect with MetaMask or other wallets for secure login.
- **Matching & Likes:** Swipe, like, and match with other users; matches are recorded both in the database and on-chain.
- **Premium Membership:** Upgrade to premium for exclusive features (Superlike Boosts, Profile Spotlight, Unlimited Likes, and more) by paying a small BNB fee.
- **Chat & Moderation:** Real-time chat with built-in moderation for safe conversations.
- **File Storage:** Profile images and other assets are stored using BNB Greenfield decentralized storage.
- **Modern UI:** Responsive design with Tailwind CSS and dark mode support.

## Technologies Used

- **Frontend:** React, Vite, Tailwind CSS, Wagmi, ethers.js, framer-motion
- **Smart Contracts:** Solidity (UserProfile.sol), Hardhat
- **Backend:** Node.js, Express, Prisma ORM, SQLite/PostgreSQL
- **Storage:** BNB Greenfield
- **Authentication:** MetaMask, WalletConnect
- **APIs:** RESTful endpoints for profile, matching, chat moderation, and storage

## Getting Started

### Prerequisites

- Node.js & npm
- MetaMask (browser extension)
- BNB Testnet funds (for premium features)
- Hardhat (for contract deployment)

### Installation

```bash
git clone https://github.com/SatyamDev803/Vibe.git
cd Vibe
npm install
```

### Environment Setup

Create a `.env` file with the following variables:

```
PRIVATE_KEY=your_wallet_private_key
BNB_TESTNET_RPC=https://data-seed-prebsc-1-s1.binance.org:8545/
CONTRACT_ADDRESS=deployed_contract_address
VITE_CONTRACT_ADDRESS=deployed_contract_address
VITE_GNFD_CHAIN_ID=your_chain_id
VITE_GNFD_NODE_URL=your_node_url
VITE_GF_PRIMARY_SP=your_primary_sp
```

### Running Locally

1. **Deploy Smart Contract:**
	```bash
	npx hardhat run scripts/deploy.js --network bsctestnet
	```
2. **Start Backend:**
	```bash
	node api/index.js
	```
3. **Start Frontend:**
	```bash
	npm run dev
	```

Access the app at `http://localhost:5173`.

## Project Structure

- `src/` — React frontend
- `contracts/` — Solidity smart contracts
- `api/` — Express backend & API routes
- `prisma/` — Database schema & migrations
- `scripts/` — Deployment scripts

## License

This project is licensed under the MIT License.
