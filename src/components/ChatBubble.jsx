import React from "react";

export default function ChatBubble({ from, text }) {
  return (
    <li
      className={`max-w-[80%] px-4 py-2 rounded-2xl shadow-md ${
        from === "me"
          ? "ml-auto bg-pink-600 text-white"
          : "mr-auto bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 border border-white/40 dark:border-gray-700/40"
      }`}
    >
      {text}
    </li>
  );
}
