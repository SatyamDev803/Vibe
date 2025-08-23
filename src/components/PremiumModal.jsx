import React from "react";

export default function PremiumModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className="
          max-w-md w-full rounded-3xl
          bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30
          backdrop-blur-xl shadow-2xl p-6
        "
      >
        <h3 className="text-2xl font-bold text-pink-600 mb-2">Premium Feature</h3>
        <p className="text-gray-800/80 dark:text-gray-200/80 mb-4">
          This is a demo modal for premium features 💎
        </p>
        <button
          onClick={onClose}
          className="px-5 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-500/30"
        >
          Close
        </button>
      </div>
    </div>
  );
}
