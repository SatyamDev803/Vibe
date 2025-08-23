import React, { useState } from "react";

export default function Premium() {
  const [active, setActive] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
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
              onClick={() => setActive(true)}
              className="px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg shadow-pink-500/30"
            >
              Upgrade Now
            </button>
            {active && (
              <span className="text-pink-700 dark:text-pink-300">Thanks! (demo only) 🎉</span>
            )}
          </div>
        </div>

        <div className="h-24 bg-gradient-to-r from-pink-500/30 via-pink-400/30 to-pink-300/30" />
      </div>
    </div>
  );
}
