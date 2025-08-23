import React from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useSignMessage,
} from "wagmi";
import { InjectedConnector } from "@wagmi/connectors";

export default function ConnectWallet({ onConnect }) {
  const { address, isConnected } = useAccount();
  const { connect, isLoading } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();
  const { signMessageAsync } = useSignMessage();

  React.useEffect(() => {
    if (isConnected && onConnect) onConnect(address);
  }, [isConnected, address, onConnect]);

  async function handleSignIn() {
    try {
      const signature = await signMessageAsync({
        message: "Login to BNB Vibe",
      });
      console.log("Signature:", signature);
      alert("Signed in successfully!");
    } catch (err) {
      console.error("Sign in failed:", err);
    }
  }

  if (isConnected) {
    return (
      <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white/30 backdrop-blur-md shadow-md">
        <button
          onClick={handleSignIn}
          className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition"
        >
          Sign In
        </button>
        <button
          onClick={() => disconnect()}
          className="bg-gray-700 text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
        >
          {address.slice(0, 6)}…{address.slice(-4)} (Disconnect)
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => connect()}
      disabled={isLoading}
      className="px-6 py-3 rounded-xl text-white shadow-lg bg-pink-500 hover:bg-pink-600 transition"
    >
      {isLoading ? "Connecting…" : "Connect Wallet"}
    </button>
  );
}
