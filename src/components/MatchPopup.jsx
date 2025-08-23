import React from "react";

export default function MatchPopup({ profile, onClose }) {
  if (!profile) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className="
          max-w-sm w-full rounded-3xl
          bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30
          backdrop-blur-xl shadow-2xl p-6 text-center
        "
      >
        <h3 className="text-2xl font-bold text-pink-600 mb-3">It's a Match! 💖</h3>
        <img
          src={profile.img}
          alt={profile.name}
          className="w-24 h-24 rounded-full mx-auto border-4 border-pink-400/60 shadow-lg"
        />
        <p className="mt-3 text-gray-900 dark:text-gray-100 font-medium">
          You and {profile.name} like each other!
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-5 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-500/30"
        >
          Close
        </button>
      </div>
    </div>
  );
}
