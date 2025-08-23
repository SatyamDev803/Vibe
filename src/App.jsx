// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { wagmiConfig } from "./lib/wallet";   // ✅ wagmi config
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Premium from "./pages/Premium";
import Matches from "./pages/Matches";

// Contract ABI + Address
import contractData from "./lib/contract.json";
export const CONTRACT_ADDRESS = contractData.address;
export const CONTRACT_ABI = contractData.abi;

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div
            className="
              flex flex-col min-h-screen
              bg-gradient-to-br from-pink-900 via-pink-800 to-pink-950
              dark:from-gray-900 dark:via-gray-950 dark:to-black
              text-white transition-colors duration-300
            "
          >
            {/* Navbar with Connect Wallet + DarkMode */}
            <NavBar />

            {/* Main Content */}
            <main className="flex-1 container mx-auto px-4 py-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/chat/:matchId" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/premium" element={<Premium />} />
                <Route path="/matches" element={<Matches />} />
              </Routes>
            </main>

            {/* Footer */}
            <footer
              className="
                mt-auto py-6 text-center text-sm
                text-pink-200/80 dark:text-gray-400/80
                border-t border-pink-500/30 dark:border-gray-800/40
                bg-pink-950/30 dark:bg-gray-900/20 backdrop-blur-lg
              "
            >
              Made with 💖 by Vibe
            </footer>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </WagmiConfig>
  );
}

export default App;
