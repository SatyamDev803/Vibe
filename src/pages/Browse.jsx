import React, { useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";

const demoProfiles = [
  {
    id: "1",
    name: "Ava",
    age: 24,
    bio: "Matcha, museums & mellow beats.",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format",
  },
  {
    id: "2",
    name: "Maya",
    age: 26,
    bio: "Hikes at dawn, dev at dusk.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format",
  },
  {
    id: "3",
    name: "Lina",
    age: 25,
    bio: "Photography & ramen explorer.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format",
  },
  {
    id: "4",
    name: "Zoey",
    age: 23,
    bio: "Crypto degen, yoga newbie.",
    img: "https://images.unsplash.com/photo-1513377883536-4ae7452fd5b3?q=80&w=1200&auto=format",
  },
];

export default function Browse() {
  const [profiles, setProfiles] = useState(demoProfiles);
  const [currentIndex, setCurrentIndex] = useState(demoProfiles.length - 1);
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(demoProfiles.length)
        .fill(0)
        .map(() => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  const saveLike = (profile) => {
    const key = "vibe_likes";
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    const set = new Map(existing.map((p) => [p.id, p]));
    set.set(profile.id, profile);
    localStorage.setItem(key, JSON.stringify([...set.values()]));
  };

  const onSwipe = (dir, profile, index) => {
    if (dir === "right" || dir === "up") {
      saveLike(profile);
    }
    updateCurrentIndex(index - 1);
  };

  const onCardLeftScreen = () => {
    // no-op; we control stack with state
  };

  const swipe = async (dir) => {
    if (!canSwipe) return;
    await childRefs[currentIndex].current.swipe(dir);
  };

  const restore = async () => {
    const newIndex = currentIndex + 1;
    if (newIndex < profiles.length) {
      await childRefs[newIndex].current.restoreCard();
      updateCurrentIndex(newIndex);
    }
  };

  return (
    <div className="relative">
      {/* Deck */}
      <div className="relative h-[72vh] md:h-[70vh] max-w-lg mx-auto">
        {profiles.map((p, index) => (
          <TinderCard
            key={p.id}
            ref={childRefs[index]}
            className="absolute w-full h-full will-change-transform"
            onSwipe={(dir) => onSwipe(dir, p, index)}
            onCardLeftScreen={() => onCardLeftScreen(p.name)}
            preventSwipe={["down"]}
            swipeRequirementType="position"
            swipeThreshold={180}
          >
            <article
              className="
                w-full h-full rounded-3xl overflow-hidden
                border border-white/30 dark:border-gray-700/30
                bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl
                shadow-2xl
              "
            >
              <div className="relative h-4/6">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                {/* top glass cap */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
              </div>

              <div className="h-2/6 p-5 flex flex-col justify-between">
                <header className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {p.name} <span className="text-gray-700/70 dark:text-gray-300/70">• {p.age}</span>
                  </h3>
                  <span className="text-pink-600 text-sm font-semibold bg-white/40 dark:bg-gray-700/40 px-2 py-1 rounded-lg border border-white/30 dark:border-gray-700/30">
                    Online
                  </span>
                </header>
                <p className="text-gray-800/80 dark:text-gray-200/80 line-clamp-2">{p.bio}</p>

                <div className="mt-3 flex items-center justify-between">
                  <button
                    onClick={() => swipe("left")}
                    className="px-5 py-2 rounded-xl bg-white/30 dark:bg-gray-700/30 border border-white/40 dark:border-gray-700/40 text-gray-900 dark:text-gray-100 shadow-md hover:bg-white/40 dark:hover:bg-gray-700/40 transition"
                  >
                    Pass 👋
                  </button>
                  <button
                    onClick={() => swipe("up")}
                    className="px-5 py-2 rounded-xl bg-white/30 dark:bg-gray-700/30 border border-white/40 dark:border-gray-700/40 text-gray-900 dark:text-gray-100 shadow-md hover:bg-white/40 dark:hover:bg-gray-700/40 transition"
                  >
                    Superlike ⭐
                  </button>
                  <button
                    onClick={() => swipe("right")}
                    className="px-6 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg shadow-pink-500/30 transition"
                  >
                    Like 💗
                  </button>
                </div>
              </div>
            </article>
          </TinderCard>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={restore}
          disabled={currentIndex === profiles.length - 1}
          className="px-4 py-2 rounded-xl bg-white/30 dark:bg-gray-700/30 border border-white/40 dark:border-gray-700/40 text-gray-900 dark:text-gray-100 shadow-md hover:bg-white/40 dark:hover:bg-gray-700/40 disabled:opacity-40"
        >
          Undo ⤺
        </button>
        <button
          onClick={() => (window.location.href = "/matches")}
          className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-500/30"
        >
          View Matches
        </button>
      </div>
    </div>
  );
}
