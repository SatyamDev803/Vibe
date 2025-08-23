import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function Chat() {
  const { matchId } = useParams();
  const [messages, setMessages] = useState([
    { id: 1, from: "them", text: "Hey! Your profile is super cute 💖" },
    { id: 2, from: "me", text: "Aww thanks! Coffee or matcha person? ☕️🍵" },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef(null);

  const match = useMemo(() => {
    const likes = JSON.parse(localStorage.getItem("vibe_likes") || "[]");
    return likes.find((p) => p.id === matchId) || { name: "Unknown", img: "" };
  }, [matchId]);

  useEffect(() => {
    // auto-scroll to bottom
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMsg = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { id: Date.now(), from: "me", text: input.trim() }]);
    setInput("");
  };

  return (
    <div className="mx-auto max-w-3xl">
      <header
        className="
          sticky top-0 z-10 mb-4 rounded-2xl
          bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30
          backdrop-blur-xl shadow-xl p-4 flex items-center gap-3
        "
      >
        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/40">
          {match.img ? (
            <img src={match.img} alt={match.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full grid place-items-center bg-pink-500/30">💗</div>
          )}
        </div>
        <div className="font-semibold text-gray-900 dark:text-gray-100">
          Chat with {match.name}
        </div>
      </header>

      <div
        ref={listRef}
        className="
          h-[60vh] overflow-y-auto rounded-2xl p-4
          bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-800/30
          backdrop-blur-lg shadow-inner
        "
      >
        <ul className="space-y-3">
          {messages.map((m) => (
            <li
              key={m.id}
              className={`max-w-[80%] px-4 py-2 rounded-2xl shadow-md ${
                m.from === "me"
                  ? "ml-auto bg-pink-600 text-white"
                  : "mr-auto bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 border border-white/40 dark:border-gray-700/40"
              }`}
            >
              {m.text}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="
          mt-4 rounded-2xl bg-white/20 dark:bg-gray-800/20
          border border-white/30 dark:border-gray-700/30 backdrop-blur-lg p-3
          flex items-center gap-2 shadow-xl
        "
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMsg()}
          placeholder="Type a sweet message…"
          className="flex-1 bg-transparent outline-none placeholder:text-gray-600/70 dark:placeholder:text-gray-300/60 text-gray-900 dark:text-gray-100"
        />
        <button
          onClick={sendMsg}
          className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg shadow-pink-500/30"
        >
          Send 💌
        </button>
      </div>
    </div>
  );
}
