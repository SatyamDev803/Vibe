// src/components/ContractActions.jsx
import React, { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import contractData from "../lib/contract.json";

export default function ContractActions() {
  const [form, setForm] = useState({
    name: "",
    bio: "",
    hobby: "",
    age: "",
    imageHash: "",
  });

  // --- Create/Update Profile ---
  const { config } = usePrepareContractWrite({
    address: contractData.address,
    abi: contractData.abi,
    functionName: "createOrUpdateProfile",
    args: [form.name, form.bio, form.imageHash, form.hobby, Number(form.age)],
  });
  const { write: saveProfile } = useContractWrite(config);

  // --- Become Premium ---
  const { config: premiumConfig } = usePrepareContractWrite({
    address: contractData.address,
    abi: contractData.abi,
    functionName: "becomePremium",
    overrides: {
      value: BigInt(5000000000000000), // 0.005 BNB
    },
  });
  const { write: becomePremium } = useContractWrite(premiumConfig);

  return (
    <div className="glass-card p-6 mt-6 rounded-2xl shadow-lg bg-pink-950/40 backdrop-blur-md">
      <h2 className="text-xl font-bold text-pink-200 mb-4">Update Profile</h2>
      
      <input
        type="text"
        placeholder="Name"
        className="w-full mb-2 p-2 rounded bg-pink-900/40 text-pink-100"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Bio"
        className="w-full mb-2 p-2 rounded bg-pink-900/40 text-pink-100"
        value={form.bio}
        onChange={(e) => setForm({ ...form, bio: e.target.value })}
      />
      <input
        type="text"
        placeholder="Hobby"
        className="w-full mb-2 p-2 rounded bg-pink-900/40 text-pink-100"
        value={form.hobby}
        onChange={(e) => setForm({ ...form, hobby: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        className="w-full mb-2 p-2 rounded bg-pink-900/40 text-pink-100"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image Hash (Greenfield / IPFS)"
        className="w-full mb-4 p-2 rounded bg-pink-900/40 text-pink-100"
        value={form.imageHash}
        onChange={(e) => setForm({ ...form, imageHash: e.target.value })}
      />

      <button
        onClick={() => saveProfile?.()}
        disabled={!saveProfile}
        className="w-full px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg text-white mb-3"
      >
        Save Profile
      </button>

      <button
        onClick={() => becomePremium?.()}
        disabled={!becomePremium}
        className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white"
      >
        Become Premium (0.005 BNB)
      </button>
    </div>
  );
}
