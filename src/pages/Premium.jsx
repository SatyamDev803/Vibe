import React, { useState } from "react";
import { ethers } from "ethers";
import contractABI from "../abi/UserProfile.json";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

export default function Premium() {
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState(null);
  const [success, setSuccess] = useState(false);

  const handlePayment = async () => {
    try {
      if (!window.ethereum) {
        alert("⚠️ Please install MetaMask to continue");
        return;
      }

      setLoading(true);
      setSuccess(false);
      setTxHash(null);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI.abi, signer);

      const tx = await contract.becomePremium({
        value: ethers.parseEther("0.005"),
      });

      await tx.wait();
      setTxHash(tx.hash);
      setSuccess(true);

    } catch (err) {
      console.error("Payment failed:", err);
      alert("❌ Payment failed: " + (err.reason || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto relative">
      {success && <Confetti numberOfPieces={250} recycle={false} />}

      <div
        className="
          rounded-3xl border border-white/30 dark:border-gray-700/30
          bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg
          shadow-2xl overflow-hidden
        "
      >
        <div className="p-8 md:p-10">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            Go <span className="text-pink-600">Premium</span> ✨
          </h2>
          <p className="mt-2 text-gray-700/80 dark:text-gray-300/80">
            Superlikes, unlimited rewinds, and priority in swipe decks — plus a cute badge.
          </p>

          <ul className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              "Unlimited Likes & Rewinds",
              "Superlike Boosts",
              "Profile Spotlight",
              "Exclusive Pink Badge",
            ].map((item) => (
              <li
                key={item}
                className="px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-700/30 border border-white/40 dark:border-gray-700/40 text-gray-900 dark:text-gray-100"
              >
                💗 {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={handlePayment}
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg shadow-pink-500/30 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Upgrade Now (0.005 BNB)"}
            </button>

            {/* Loading animation */}
            <AnimatePresence>
              {loading && (
                <motion.div
                  className="ml-3 text-pink-600 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  ⏳ Waiting for confirmation...
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success */}
            {success && txHash && (
              <a
                href={`https://testnet.bscscan.com/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 font-semibold underline"
              >
                🎉 Premium Activated — View on BscScan
              </a>
            )}
          </div>
        </div>

        <div className="h-24 bg-gradient-to-r from-pink-500/30 via-pink-400/30 to-pink-300/30" />
      </div>
    </div>
  );
}
