import { Client } from "@bnb-chain/greenfield-js-sdk";

const greenfieldClient = new Client({
  chainId: process.env.VITE_GNFD_CHAIN_ID,
  grpcUrl: process.env.VITE_GNFD_NODE_URL,
  primarySp: process.env.VITE_GF_PRIMARY_SP,
});

export default greenfieldClient;
