import React from "react";

export default function SwipeCard({ profile }) {
  return (
    <div
      className="
        w-full h-full rounded-3xl overflow-hidden
        border border-white/30 dark:border-gray-700/30
        bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl
        shadow-2xl
      "
    >
      <div className="relative h-4/6">
        <img
          src={profile.img}
          alt={profile.name}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
      </div>

      <div className="h-2/6 p-5 flex flex-col justify-between">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {profile.name}
          <span className="ml-2 text-gray-700/70 dark:text-gray-300/70">
            {profile.age}
          </span>
        </h3>
        <p className="text-gray-800/80 dark:text-gray-200/80 line-clamp-2">
          {profile.bio}
        </p>
      </div>
    </div>
  );
}
