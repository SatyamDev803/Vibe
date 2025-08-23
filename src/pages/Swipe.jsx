import React, { useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import { Heart, Star, X, RotateCcw } from "lucide-react"; // ✅ icons

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
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&q=80",
  },
  {
    id: "5",
    name: "Chloe",
    age: 25,
    bio: "Espresso enthusiast and vinyl collector.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format",
  },
  {
    id: "6",
    name: "Sofia",
    age: 27,
    bio: "Fluent in sarcasm and movie quotes.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format",
  },
  {
    id: "7",
    name: "Isabella",
    age: 22,
    bio: "Chasing sunsets and new recipes.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format",
  },
  {
    id: "8",
    name: "Olivia",
    age: 26,
    bio: "Probably thinking about pasta.",
    img: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=1200&auto=format",
  },
  {
    id: "9",
    name: "Mia",
    age: 24,
    bio: "Dog mom. Aspiring globetrotter.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format",
  },
  // {
  //   id: "10",
  //   name: "Emily",
  //   age: 28,
  //   bio: "Lover of art, history, and long walks.",
  //   img: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=1200&auto=format",
  // },
  {
    id: "11",
    name: "Harper",
    age: 23,
    bio: "Finding the magic in the mundane.",
    img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1200&auto=format",
  },
  {
    id: "12",
    name: "Evelyn",
    age: 29,
    bio: "Thrives on good books and better coffee.",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format",
  },
  {
    id: "13",
    name: "Amelia",
    age: 25,
    bio: "Weekend painter, weekday coder.",
    img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1200&auto=format",
  },
  // {
  //   id: "14",
  //   name: "Abigail",
  //   age: 26,
  //   bio: "Just a girl, standing in front of a salad, asking it to be a donut.",
  //   img: "https://images.unsplash.com/photo-1552695845-4a5a56de0252?q=80&w=1200&auto=format",
  // },
  // {
  //   id: "15",
  //   name: "Scarlett",
  //   age: 27,
  //   bio: "Seeking adventures and authentic connections.",
  //   img: "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=1200&auto=format",
  // },
  {
    id: "16",
    name: "Grace",
    age: 24,
    bio: "Plant-based and always exploring.",
    img: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1200&auto=format",
  },
  {
    id: "17",
    name: "Lily",
    age: 22,
    bio: "Slightly addicted to true crime podcasts.",
    img: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=1200&auto=format",
  },
  {
    id: "18",
    name: "Aria",
    age: 25,
    bio: "Salsa dancer and amateur chef.",
    img: "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?q=80&w=1200&auto=format",
  },
  // {
  //   id: "19",
  //   name: "Nora",
  //   age: 28,
  //   bio: "Life's short. Eat the cake.",
  //   img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format",
  // },
  {
    id: "20",
    name: "Hannah",
    age: 26,
    bio: "Finding joy in the little things.",
    img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1200&auto=format",
  },
  // {
  //   id: "21",
  //   name: "Riley",
  //   age: 23,
  //   bio: "My dog thinks I'm pretty cool.",
  //   img: "https://images.unsplash.com/photo-1488426862026-39b533079b33?q=80&w=1200&auto=format",
  // },
  // {
  //   id: "22",
  //   name: "Stella",
  //   age: 27,
  //   bio: "Beach bum with a penchant for poetry.",
  //   img: "https://images.unsplash.com/photo-1592621385612-4bb14214b654?q=80&w=1200&auto=format",
  // },
  // {
  //   id: "23",
  //   name: "Penelope",
  //   age: 24,
  //   bio: "Making life a story worth telling.",
  //   img: "https://images.unsplash.com/photo-1601412436009-d964402742fb?q=80&w=1200&auto=format",
  // },
  // {
  //   id: "24",
  //   name: "Victoria",
  //   age: 29,
  //   bio: "Connoisseur of fine wine and bad puns.",
  //   img: "https://images.unsplash.com/photo-1521235316393-e84a239c141e?q=80&w=1200&auto=format",
  // },
  // {
  //   id: "25",
  //   name: "Madison",
  //   age: 25,
  //   bio: "Let's find a new rooftop bar.",
  //   img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1200&auto=format",
  // },
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

  const swipe = async (dir) => {
    if (!canSwipe) return;
    const ref = childRefs[currentIndex]?.current;
    if (!ref) return;
    try {
      await ref.swipe(dir);
    } catch (err) {
      console.error("Swipe error:", err);
    }
  };

  const restore = async () => {
    const newIndex = currentIndex + 1;
    if (newIndex < profiles.length) {
      const ref = childRefs[newIndex]?.current;
      if (ref) {
        await ref.restoreCard();
        updateCurrentIndex(newIndex);
      }
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
            preventSwipe={["down"]}
            swipeRequirementType="position"
            swipeThreshold={180}
          >
            <article
              className="w-full h-full rounded-3xl overflow-hidden
             border border-white/20 dark:border-gray-700/30
              dark:bg-gray-800/30 backdrop-blur-xl
             shadow-md hover:shadow-lg
             transition-shadow duration-300 relative"
            >

              {/* Image */}
              <div className="relative h-full">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* profile info */}
                <div className="absolute bottom-0 p-6 w-full text-left">
                  <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                    {p.name}{" "}
                    <span className="text-gray-200 font-medium">• {p.age}</span>
                  </h3>
                  <p className="mt-2 text-gray-100/90 line-clamp-2 text-base">
                    {p.bio}
                  </p>
                </div>

                {/* online badge */}
                <span className="absolute top-4 right-4 px-3 py-1 text-sm font-semibold text-white bg-pink-600 rounded-full shadow-md animate-pulse">
                  ● Online
                </span>
              </div>
            </article>
          </TinderCard>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-6">
        {/* Undo */}
        <button
          onClick={restore}
          disabled={currentIndex === profiles.length - 1}
          className="p-4 rounded-full bg-white/30 dark:bg-gray-700/30 
                     border border-white/40 dark:border-gray-700/40 
                     text-gray-900 dark:text-gray-100 shadow-md 
                     hover:bg-white/40 dark:hover:bg-gray-700/40 
                     disabled:opacity-40"
        >
          <RotateCcw className="w-6 h-6" />
        </button>

        {/* Pass */}
        <button
          onClick={() => swipe("left")}
          disabled={!canSwipe}
          className="p-5 rounded-full bg-white text-pink-600 shadow-lg 
                     hover:bg-gray-100 transition disabled:opacity-40"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Superlike */}
        <button
          onClick={() => swipe("up")}
          disabled={!canSwipe}
          className="p-5 rounded-full bg-blue-100 text-blue-600 shadow-lg 
                     hover:bg-blue-200 transition disabled:opacity-40"
        >
          <Star className="w-7 h-7" />
        </button>

        {/* Like */}
        <button
          onClick={() => swipe("right")}
          disabled={!canSwipe}
          className="p-5 rounded-full bg-pink-600 text-white shadow-lg shadow-pink-500/40 
                     hover:bg-pink-700 transition disabled:opacity-40"
        >
          <Heart className="w-8 h-8" />
        </button>
      </div>

      {/* Matches shortcut */}
      <div className="mt-6 text-center">
        <button
          onClick={() => (window.location.href = "/matches")}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 
                     text-white font-semibold shadow-lg shadow-pink-500/40 hover:opacity-90"
        >
          View Matches 💕
        </button>
      </div>
    </div>
  );
}