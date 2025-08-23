import React from "react";
import { Link } from "react-router-dom";

export default function ProfileCard({ profile }) {
  return (
    <Link
      to={`/chat/${profile.id}`}
      className="
        group rounded-3xl overflow-hidden
        bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30
        backdrop-blur-lg shadow-xl hover:shadow-2xl transition
      "
    >
      <div className="h-48 w-full overflow-hidden">
        <img
          src={profile.img}
          alt={profile.name}
          className="h-full w-full object-cover group-hover:scale-105 transition"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {profile.name} • {profile.age}
        </h3>
        <p className="mt-1 text-gray-700/80 dark:text-gray-300/80 line-clamp-2">
          {profile.bio}
        </p>
      </div>
    </Link>
  );
}
