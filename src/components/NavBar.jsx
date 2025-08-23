import React from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";
import DarkModeToggle from "./DarkModeToggle";

export default function NavBar({ isPremium }) {
    return (
        <nav
            className="
        flex items-center justify-between px-6 py-3
        bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl
        shadow-lg border-b border-white/30 dark:border-gray-800/40
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
            <div className="flex space-x-6 items-center">
                <Link to="/" className="hover:text-pink-500">
                    Home
                </Link>
                <Link to="/browse" className="hover:text-pink-500">
                    Browse
                </Link>
                <Link to="/matches" className="hover:text-pink-500">
                    Matches
                </Link>

                <Link to="/chat/2" className="hover:text-pink-500">
                    Chat
                </Link>

                <Link to="/profile" className="hover:text-pink-500">
                    Profile
                </Link>
                <Link to="/premium" className="hover:text-yellow-400">
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
