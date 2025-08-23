import React, { useEffect, useState } from "react";

const initial = {
  name: "",
  age: "",
  bio: "",
  interests: "",
  avatar: "",
};

export default function Profile() {
  const [form, setForm] = useState(initial);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("vibe_profile") || "null");
    if (data) setForm(data);
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSave = () => {
    localStorage.setItem("vibe_profile", JSON.stringify(form));
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div
        className="
          rounded-3xl border border-white/30 dark:border-gray-700/30
          bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg shadow-2xl p-8
        "
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Your <span className="text-pink-600">Vibe</span> Profile
        </h2>
        <p className="text-gray-700/80 dark:text-gray-300/80 mt-1">
          Make it cute, genuine, and very you 💗
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="text-sm text-gray-800 dark:text-gray-200">Name</span>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              className="mt-1 w-full px-4 py-2 rounded-xl bg-white/30 dark:bg-gray-700/30 border border-white/40 dark:border-gray-700/40 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Ava"
            />
          </label>
          <label className="block">
            <span className="text-sm text-gray-800 dark:text-gray-200">Age</span>
            <input
              name="age"
              value={form.age}
              onChange={onChange}
              type="number"
              className="mt-1 w-full px-4 py-2 rounded-xl bg-white/30 dark:bg-gray-700/30 border border-white/40 dark:border-gray-700/40 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="24"
            />
          </label>

          <label className="md:col-span-2 block">
            <span className="text-sm text-gray-800 dark:text-gray-200">Bio</span>
            <textarea
              name="bio"
              value={form.bio}
              onChange={onChange}
              rows="4"
              className="mt-1 w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-700/30 border border-white/40 dark:border-gray-700/40 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="A line about your vibe…"
            />
          </label>

          <label className="md:col-span-2 block">
            <span className="text-sm text-gray-800 dark:text-gray-200">Interests (comma separated)</span>
            <input
              name="interests"
              value={form.interests}
              onChange={onChange}
              className="mt-1 w-full px-4 py-2 rounded-xl bg-white/30 dark:bg-gray-700/30 border border-white/40 dark:border-gray-700/40 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="music, yoga, dev"
            />
          </label>

          <label className="md:col-span-2 block">
            <span className="text-sm text-gray-800 dark:text-gray-200">Avatar URL</span>
            <input
              name="avatar"
              value={form.avatar}
              onChange={onChange}
              className="mt-1 w-full px-4 py-2 rounded-xl bg-white/30 dark:bg-gray-700/30 border border-white/40 dark:border-gray-700/40 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="https://…"
            />
          </label>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={onSave}
            className="px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg shadow-pink-500/30"
          >
            Save Profile
          </button>
          {saved && (
            <span className="text-pink-700 dark:text-pink-300 font-medium">Saved ✨</span>
          )}
        </div>
      </div>
    </div>
  );
}
