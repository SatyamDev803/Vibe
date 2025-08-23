import { createConfig, http } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [bscTestnet],
  connectors: [injected()],   // ✅ use factory not class
  transports: {
    [bscTestnet.id]: http(import.meta.env.VITE_BNB_TESTNET_RPC),
  },
});
