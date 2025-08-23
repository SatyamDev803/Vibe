import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem("vibe_likes") || "[]");
    setMatches(likes);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Your <span className="text-pink-600">Matches</span>
      </h2>

      {matches.length === 0 ? (
        <div
          className="rounded-2xl p-6 text-center
            bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30
            backdrop-blur-lg shadow-lg"
        >
          <p className="text-gray-800/80 dark:text-gray-200/80">
            No matches yet — go like some profiles 💗
          </p>
          <Link
            to="/browse"
            className="inline-flex mt-4 px-5 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white shadow"
          >
            Browse Profiles
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((m) => (
            <Link
              to={`/chat/${m.id}`}
              key={m.id}
              className="
                group rounded-3xl overflow-hidden
                bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30
                backdrop-blur-lg shadow-xl hover:shadow-2xl transition
              "
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {m.name} <span className="text-gray-700/70 dark:text-gray-300/70">• {m.age}</span>
                  </h3>
                  <span className="text-pink-600">Chat ➜</span>
                </div>
                <p className="mt-1 text-gray-700/80 dark:text-gray-300/80 line-clamp-2">{m.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
