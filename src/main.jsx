import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";

import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, sepolia, polygon } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Setup query client
const queryClient = new QueryClient();

// Setup wagmi config (no configureChains anymore)
const config = createConfig({
  chains: [sepolia, polygon, mainnet], // use only sepolia if you want testnet
  transports: {
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [mainnet.id]: http(),
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
