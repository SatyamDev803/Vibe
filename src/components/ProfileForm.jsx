import React, { useState } from "react";
import axios from "axios";

export default function ProfileForm() {
  const [form, setForm] = useState({
    name: "",
    bio: "",
    imageHash: "",
    hobby: "",
    age: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("/api/update-profile", form);
      alert("✅ Profile updated!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to update profile.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
    >
      <input
        type="text"
        placeholder="Name"
        className="w-full border px-3 py-2 rounded-lg"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <textarea
        placeholder="Bio"
        className="w-full border px-3 py-2 rounded-lg"
        value={form.bio}
        onChange={(e) => setForm({ ...form, bio: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL / IPFS hash"
        className="w-full border px-3 py-2 rounded-lg"
        value={form.imageHash}
        onChange={(e) => setForm({ ...form, imageHash: e.target.value })}
      />
      <input
        type="text"
        placeholder="Hobby"
        className="w-full border px-3 py-2 rounded-lg"
        value={form.hobby}
        onChange={(e) => setForm({ ...form, hobby: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        className="w-full border px-3 py-2 rounded-lg"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
      >
        Save Profile
      </button>
    </form>
  );
}
