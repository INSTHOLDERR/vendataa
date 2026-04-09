import { useState, useEffect } from "react";

const MSGS = [
  "I'm sorry, Thilothama 🥺",
  "The mistake was mine, entirely 💔",
  "You mean everything to me, Meenama 💗",
  "You're my favorite person in this world 🌸",
  "I purple you, my ARMY girl 💜",
  "Please smile again? That's all I want 🌷",
];

export default function HomePage({ setTab }) {
  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = MSGS[idx];
    let i = 0;
    setShown("");
    setTyping(true);
    const t = setInterval(() => {
      i++;
      setShown(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(t);
        setTyping(false);
        setTimeout(() => setIdx((x) => (x + 1) % MSGS.length), 2400);
      }
    }, 52);
    return () => clearInterval(t);
  }, [idx]);

  return (
    <div className="wrap">
      {/* Hero card */}
      <div className="glass" style={{ padding: "38px 24px", textAlign: "center", marginBottom: "22px" }}>
        <div className="hbeat" style={{ fontSize: "68px", display: "block", marginBottom: "18px" }}>💗</div>
        <h1 className="stitle shimmer" style={{ fontSize: "clamp(28px,7vw,46px)", marginBottom: "6px" }}>
          vendataa 💗
        </h1>
        <p
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(16px,4vw,20px)",
            color: "rgba(255,255,255,0.75)",
            marginBottom: "18px",
            fontStyle: "italic",
          }}
        >
          my Meenama 🌸
        </p>

        {/* Typewriter */}
        <div style={{ minHeight: "58px", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 8px" }}>
          <p
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(15px,3.8vw,18px)",
              color: "#fff",
              fontStyle: "italic",
              lineHeight: 1.6,
            }}
          >
            "{shown}
            {typing && <span className="cursor"> </span>}"
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", margin: "20px 0 26px" }}>
          <button className="btn-rose" onClick={() => setTab("love")}>My love for you 💗</button>
          <button className="btn-ghost" onClick={() => setTab("bts")}>BTS Corner 💜</button>
        </div>
      </div>

      {/* Stats grid */}
      <div className="g2" style={{ marginBottom: "22px" }}>
        {[
          { i: "💝", label: "Days loving you",      val: "∞" },
          { i: "🌸", label: "Times I think of you", val: "24/7" },
          { i: "✨", label: "How special you are",  val: "100%" },
          { i: "💜", label: "I purple you",          val: "Always" },
        ].map((s, k) => (
          <div key={k} className="glass" style={{ padding: "20px 14px", textAlign: "center" }}>
            <div style={{ fontSize: "26px", marginBottom: "6px" }}>{s.i}</div>
            <div
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(20px,5vw,26px)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "4px",
              }}
            >
              {s.val}
            </div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* V quote */}
      <div className="glass" style={{ padding: "26px 22px", textAlign: "center" }}>
        <div className="spin" style={{ fontSize: "34px", display: "inline-block", marginBottom: "12px" }}>🌸</div>
        <p
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(15px,4vw,19px)",
            fontStyle: "italic",
            color: "#fff",
            lineHeight: 1.8,
            marginBottom: "14px",
          }}
        >
          "I purple you" means I trust you, I'll protect you, and I'll love you for a very long time.
        </p>
        <span className="pill">— Kim Taehyung (V) 💜</span>
      </div>
    </div>
  );
}