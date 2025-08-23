import { createConfig, http } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [bscTestnet],
  connectors: [injected()],
  transports: {
    [bscTestnet.id]: http(),
  },
});
