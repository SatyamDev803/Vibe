import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";

import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, sepolia, polygon, bscTestnet } from "wagmi/chains";
import { injected } from "wagmi/connectors";   // ✅ use injected connector (MetaMask, etc.)
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Setup query client
const queryClient = new QueryClient();

// Setup wagmi config
const config = createConfig({
  chains: [sepolia, polygon, mainnet, bscTestnet], // keep only bscTestnet if you want
  connectors: [injected()],   // ✅ add connector
  transports: {
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [mainnet.id]: http(),
    [bscTestnet.id]: http(),
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
);
