import { useState } from "react";
import { NOTES } from "./Constants";
import FlipCard from "./Flipcard";
import { Confetti } from "./Sharedcomponents";

const MOOD_MAP = {
  "😊": "Seeing you smile is my favorite thing in the world 🌸",
  "😍": "Aww, you're adorable when you're lovey-dovey 💗",
  "🥺": "Come here. Everything will be okay, I promise 💜",
  "😤": "I understand. I deserve that. I'm working on it 🙏",
  "💗": "My heart is so full knowing you feel this way 💗",
  "💜": "ARMY mode activated! Time for some BTS therapy 💜",
};

const LOVE_METERS = [
  { l: "How much I love Thilothama",    d: "0s" },
  { l: "How sorry I am",                d: "0.2s" },
  { l: "How much I need you",           d: "0.4s" },
  { l: "How much you deserve better",   d: "0.6s" },
];

const REACTIONS = [
  { k: "aww",     l: "Aww 🥺" },
  { k: "love",    l: "Love it 💗" },
  { k: "forgive", l: "I forgive you 🌸" },
  { k: "purple",  l: "I purple you 💜" },
];

export default function LovePage() {
  const [mood, setMood] = useState(null);
  const [reacted, setReacted] = useState({});
  const [confetti, setConfetti] = useState(false);

  const react = (k) => {
    const wasOn = reacted[k];
    setReacted((r) => ({ ...r, [k]: !r[k] }));
    if (!wasOn) {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 3500);
    }
  };

  return (
    <div className="wrap">
      <Confetti on={confetti} />

      <div style={{ textAlign: "center", marginBottom: "26px" }}>
        <h2 className="stitle" style={{ marginBottom: "6px" }}>Why I love you</h2>
        <p className="ssub">Tap each card, Meenama 💗</p>
      </div>

      {/* Flip cards */}
      <div className="g2" style={{ marginBottom: "22px" }}>
        {NOTES.map((n, i) => (
          <FlipCard key={i} {...n} />
        ))}
      </div>

      {/* Love meters */}
      <div className="glass" style={{ padding: "24px 20px", marginBottom: "22px" }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "22px", color: "#fff", marginBottom: "18px" }}>
          Love meters 💕
        </h3>
        {LOVE_METERS.map((m, i) => (
          <div key={i} style={{ marginBottom: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{m.l}</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>∞</span>
            </div>
            <div className="bar-track">
              <div className="bar-fill" style={{ animationDelay: m.d }} />
            </div>
          </div>
        ))}
      </div>

      {/* Mood picker */}
      <div className="glass" style={{ padding: "24px 20px", marginBottom: "22px", textAlign: "center" }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "22px", color: "#fff", marginBottom: "6px" }}>
          How are you feeling? 🌸
        </h3>
        <p className="ssub" style={{ marginBottom: "16px" }}>Tell me your mood right now, Meenama</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
          {Object.keys(MOOD_MAP).map((m) => (
            <button key={m} className={"mbtn" + (mood === m ? " sel" : "")} onClick={() => setMood(m)}>
              {m}
            </button>
          ))}
        </div>
        {mood && (
          <div
            className="slu"
            style={{
              marginTop: "16px",
              padding: "14px 18px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "16px",
              fontFamily: "'Playfair Display',serif",
              fontSize: "15px",
              color: "#fff",
              fontStyle: "italic",
              lineHeight: 1.7,
            }}
          >
            {MOOD_MAP[mood]}
          </div>
        )}
      </div>

      {/* Reactions */}
      <div className="glass" style={{ padding: "24px 20px" }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "22px", color: "#fff", marginBottom: "14px" }}>
          Send me a reaction 💌
        </h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {REACTIONS.map((b) => (
            <button key={b.k} className={"rbtn" + (reacted[b.k] ? " on" : "")} onClick={() => react(b.k)}>
              {b.l} {reacted[b.k] ? "✓" : ""}
            </button>
          ))}
        </div>
        {Object.values(reacted).some(Boolean) && (
          <p className="slu" style={{ marginTop: "12px", fontSize: "14px", color: "#fff", fontStyle: "italic" }}>
            That just made my whole day, Meenama 💗
          </p>
        )}
      </div>
    </div>
  );
}