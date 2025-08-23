import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ConnectWallet from "../components/ConnectWallet";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] grid place-items-center">
      <section
        className="
          relative w-full max-w-3xl mx-auto
          rounded-3xl border border-white/30 dark:border-gray-700/30
          bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg
          shadow-2xl p-10 text-center
        "
      >
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20 dark:ring-white/10" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          Welcome to <span className="text-pink-600">Vibe</span> 💕
        </h1>
        <p className="mt-4 text-gray-700/80 dark:text-gray-300/80">
          A playful web3 matchmaking experience. Connect your wallet and start
          swiping through vibes.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <ConnectWallet
            onConnect={() => {
              // Tiny confetti-like pulse
              const el = document.getElementById("browse-cta");
              if (el) el.classList.add("scale-105");
              setTimeout(() => el?.classList.remove("scale-105"), 250);
            }}
          />

          <button
            id="browse-cta"
            onClick={() => navigate("/browse")}
            className="
              inline-flex items-center justify-center px-6 py-3 rounded-xl
              bg-pink-600 hover:bg-pink-700 text-white font-semibold
              shadow-lg shadow-pink-500/30 transition-transform
            "
          >
            Start Browsing
            <span className="ml-2">✨</span>
          </button>

          <Link
            to="/profile"
            className="
              inline-flex items-center justify-center px-5 py-3 rounded-xl
              bg-white/30 dark:bg-gray-700/30 hover:bg-white/40 dark:hover:bg-gray-700/40
              border border-white/40 dark:border-gray-700/40
              text-gray-900 dark:text-gray-100 font-medium
              shadow-md transition
            "
          >
            Build Profile
          </Link>
        </div>

        <div className="mt-6 text-xs text-gray-600/80 dark:text-gray-400/80">
          Tip: toggle dark mode in the top-right to see the full glass effect.
        </div>
      </section>
    </div>
  );
}
