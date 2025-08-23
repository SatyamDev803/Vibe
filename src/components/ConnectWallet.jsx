import React, { useEffect, useRef, useState } from "react";
import { useAccount, useConnect, useDisconnect, useChainId } from "wagmi";
import { createPortal } from "react-dom";

export default function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending, error } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();

  const [errorMessage, setErrorMessage] = useState(null);
  const lastAddressRef = useRef(null);

  // ✅ Log state transitions once
  useEffect(() => {
    if (isConnected && address !== lastAddressRef.current) {
      console.log("✅ Wallet connected");
      console.log("   Address:", address);
      console.log("   Chain ID:", chainId);
      lastAddressRef.current = address;
    } else if (!isConnected && lastAddressRef.current !== "disconnected") {
      console.log("❌ Wallet disconnected");
      lastAddressRef.current = "disconnected";
    }
  }, [isConnected, address, chainId]);

  // ✅ Human-readable error handling
  useEffect(() => {
    if (error) {
      let msg = "Something went wrong. Please try again.";
      if (error.message.includes("User rejected")) {
        msg = "You cancelled the connection request.";
      } else if (error.message.includes("No crypto wallet")) {
        msg = "No wallet detected. Please install MetaMask.";
      } else if (error.message.includes("Unsupported chain")) {
        msg = "Unsupported network. Please switch to BNB Testnet.";
      }
      setErrorMessage(msg);
    }
  }, [error]);

  if (isConnected) {
    return (
      <div className="flex items-center space-x-3">
        <button
          onClick={() => disconnect()}
          className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
        >
          {address.slice(0, 6)}…{address.slice(-4)} (Disconnect)
        </button>
      </div>
    );
  }

  const metamaskConnector = connectors.find(c => c.name === "MetaMask");

  return (
    <>
      {metamaskConnector && (
        <button
          onClick={() => connect({ connector: metamaskConnector })}
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          {isPending ? "Connecting..." : "Connect Wallet"}
        </button>
      )}

      {/* ✅ Error toast */}
      {errorMessage &&
        createPortal(
          <div className="fixed top-20 right-6 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50 animate-fadeIn">
            {errorMessage}
            <button
              onClick={() => setErrorMessage(null)}
              className="ml-3 text-xs underline"
            >
              Dismiss
            </button>
          </div>,
          document.body
        )}
    </>
  );
}
