import React from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";
import DarkModeToggle from "./DarkModeToggle";

export default function NavBar({ isPremium }) {
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between px-6 py-3
        bg-white/20 dark:bg-gray-800/20
        backdrop-blur-xl
        border-b border-white/30 dark:border-gray-700/30
        shadow-md hover:shadow-lg transition-shadow
      "
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-extrabold text-pink-500 tracking-wide hover:text-pink-600 transition"
      >
        Vibe
      </Link>

      {/* Links */}
      <div className="flex space-x-6 items-center text-gray-800 dark:text-gray-200">
        <Link to="/" className="hover:text-pink-500 transition">
          Home
        </Link>
        <Link to="/browse" className="hover:text-pink-500 transition">
          Swipe
        </Link>
        <Link to="/matches" className="hover:text-pink-500 transition">
          Matches
        </Link>
        <Link to="/chat/2" className="hover:text-pink-500 transition">
          Chat
        </Link>
        <Link to="/profile" className="hover:text-pink-500 transition">
          Profile
        </Link>
        <Link
          to="/premium"
          className="hover:text-yellow-400 transition font-medium"
        >
          {isPremium ? "⭐ Premium" : "Go Premium"}
        </Link>
      </div>

      {/* Wallet + Dark Mode */}
      <div className="flex items-center space-x-4">
        <DarkModeToggle />
        <ConnectWallet />
      </div>
    </nav>
  );
}
