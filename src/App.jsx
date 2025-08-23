import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { wagmiConfig } from "./lib/wallet";   // ✅ wagmi config
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Browse from "./pages/Swipe";
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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div
          className="
            flex flex-col min-h-screen
            bg-gradient-to-br from-pink-100 via-white to-pink-200
            dark:from-gray-900 dark:via-gray-950 dark:to-black
            transition-colors duration-300 pt-16
          "
        >
          {/* Navbar */}
          <NavBar />

          {/* Main Content */}
          <main className="flex-1">
            <Routes>
              {/* Home full-width (background image covers) */}
              <Route path="/" element={<Home />} />

              {/* Other routes boxed with container */}
              <Route
                path="/browse"
                element={<div className="container mx-auto px-4 py-6"><Browse /></div>}
              />
              <Route
                path="/chat/:matchId"
                element={<div className="container mx-auto px-4 py-6"><Chat /></div>}
              />
              <Route
                path="/profile"
                element={<div className="container mx-auto px-4 py-6"><Profile /></div>}
              />
              <Route
                path="/premium"
                element={<div className="container mx-auto px-4 py-6"><Premium /></div>}
              />
              <Route
                path="/matches"
                element={<div className="container mx-auto px-4 py-6"><Matches /></div>}
              />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
