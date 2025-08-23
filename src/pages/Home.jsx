import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="
        w-full min-h-screen 
        bg-cover bg-center bg-no-repeat bg-fixed 
        flex items-center justify-center
      "
      style={{
        backgroundImage: "url('/images/bg.jpeg')", // ✅ image should be in /public/images/
      }}
    >
      <div className="w-full px-4 sm:px-8 max-w-4xl">
        <section
          className="
            relative w-full rounded-3xl
            border border-white/30 dark:border-gray-700/30
            bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl
            shadow-2xl p-10 text-center
          "
        >
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20 dark:ring-white/10" />

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Welcome to <span className="text-pink-600">Vibe</span> 💕
          </h1>

          <p className="mt-4 text-gray-700/80 dark:text-gray-300/80 max-w-2xl mx-auto">
            A playful web3 matchmaking experience. Connect your wallet and start swiping through vibes.
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              id="browse-cta"
              onClick={() => navigate("/browse")}
              className="px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg shadow-pink-500/30 transition"
            >
              Start Browsing ✨
            </button>

            <Link
              to="/profile"
              className="px-6 py-3 rounded-xl bg-white/80 hover:bg-white text-gray-900 font-medium border border-white/40 shadow-md transition"
            >
              Build Profile
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
