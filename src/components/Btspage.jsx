import { useState, useRef, useCallback } from "react";
import { BTS_SONGS, MEMBERS, LOVE_MSGS } from "./Constants";

const BG_IMAGES = [
  { id:"gdZLi9oWNZg", top:"4%",   left:"-6%",  size:130, rot:-14, op:0.18 },
  { id:"WMweEpGlu_U", top:"22%",  right:"-5%", size:115, rot:12,  op:0.15 },
  { id:"xEeFrLSkMm8", top:"44%",  left:"-4%",  size:120, rot:-9,  op:0.16 },
  { id:"ALj5MKjy2BU", top:"64%",  right:"-6%", size:140, rot:16,  op:0.14 },
  { id:"XsX3ATc3FbA", top:"82%",  left:"2%",   size:110, rot:-11, op:0.15 },
  { id:"MBdVXkSdhwU", top:"14%",  left:"42%",  size:90,  rot:6,   op:0.09 },
];

const WATERMARKS = [
  { t:"BTS",      top:10, left:3,  size:"52px", rot:-15 },
  { t:"💜",       top:32, left:82, size:"40px", rot:10  },
  { t:"ARMY",     top:55, left:8,  size:"46px", rot:-8  },
  { t:"BTS",      top:70, left:76, size:"56px", rot:12  },
  { t:"💜",       top:85, left:38, size:"42px", rot:-5  },
  { t:"방탄소년단", top:44, left:30, size:"28px", rot:8   },
];

function BubblePop() {
  const wHeightsRef = useRef(Array.from({ length: 20 }, () => 15 + Math.random() * 85));
  const [bubbles, setBubbles] = useState(() =>
    Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: 3 + Math.random() * 94,
      y: 3 + Math.random() * 94,
      size: 28 + Math.random() * 28,
      popped: false,
      dur: 1.0 + (i % 5) * 0.35,
      delay: (i % 20) * 0.12,
      msg: LOVE_MSGS[i % LOVE_MSGS.length],
    }))
  );
  const [popMsgs, setPopMsgs] = useState([]);
  const [score, setScore] = useState(0);
  const [won, setWon] = useState(false);
  const msgIdRef = useRef(0);

  const popBubble = useCallback(
    (b) => {
      if (b.popped) return;
      setBubbles((prev) => prev.map((bb) => (bb.id === b.id ? { ...bb, popped: true } : bb)));
      const msgId = ++msgIdRef.current;
      setPopMsgs((prev) => [...prev, { id: msgId, x: b.x, y: b.y, msg: b.msg }]);
      setTimeout(() => setPopMsgs((prev) => prev.filter((m) => m.id !== msgId)), 1700);
      const ns = score + 1;
      setScore(ns);
      if (ns >= 100) setWon(true);
    },
    [score]
  );

  const reset = () => {
    setBubbles(
      Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: 3 + Math.random() * 94,
        y: 3 + Math.random() * 94,
        size: 28 + Math.random() * 28,
        popped: false,
        dur: 1.0 + (i % 5) * 0.35,
        delay: (i % 20) * 0.12,
        msg: LOVE_MSGS[i % LOVE_MSGS.length],
      }))
    );
    setScore(0);
    setWon(false);
    setPopMsgs([]);
  };

  return (
    <div className="glass" style={{ padding: "22px 18px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px", flexWrap: "wrap", gap: "8px" }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "21px", color: "#fff" }}>Bubble Pop 🫧</h3>
        <span className="pill">💜 {score}/100</span>
      </div>
      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", marginBottom: "14px" }}>
        Pop all 100 bubbles — each one says "I love you"! 💗
      </p>
      <div
        style={{
          position: "relative",
          height: "380px",
          borderRadius: "20px",
          overflow: "hidden",
          background: "linear-gradient(135deg,rgba(255,200,230,0.3),rgba(180,150,255,0.25))",
          border: "1.5px solid rgba(255,255,255,0.3)",
        }}
      >
        {bubbles.map((b) => (
          <div
            key={b.id}
            className={"bbl" + (b.popped ? " popped" : "")}
            style={{
              left: b.x + "%",
              top: b.y + "%",
              width: b.size + "px",
              height: b.size + "px",
              fontSize: Math.max(10, b.size * 0.45) + "px",
              animationDuration: b.dur + "s",
              animationDelay: b.delay + "s",
            }}
            onClick={() => popBubble(b)}
          >
            💜
          </div>
        ))}

        {popMsgs.map((m) => (
          <div key={m.id} className="bbl-msg" style={{ left: m.x + "%", top: m.y + "%" }}>
            {m.msg}
          </div>
        ))}

        {/* Progress bar */}
        <div style={{ position: "absolute", bottom: "10px", left: "10px", right: "10px", height: "6px", background: "rgba(255,255,255,0.2)", borderRadius: "4px", overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              background: "linear-gradient(90deg,#fff,#FFD6EC)",
              borderRadius: "4px",
              width: (score / 100) * 100 + "%",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        {won && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255,240,250,0.92)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              animation: "slideUp 0.5s ease",
            }}
          >
            <div style={{ fontSize: "54px", marginBottom: "10px" }}>🎉</div>
            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "22px", fontWeight: 700, color: "#7A0040", marginBottom: "8px", textAlign: "center" }}>
              All 100! I love you, Meenama!
            </p>
            <p style={{ fontSize: "14px", color: "#B5185F", marginBottom: "18px" }}>💗 × 100 = My love for you 💗</p>
            <button className="btn-rose" onClick={reset}>Play again 🫧</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BTSPage() {
  const [ytSong, setYtSong] = useState(null);
  const wHeights = useRef(Array.from({ length: 20 }, () => 15 + Math.random() * 85)).current;

  return (
    <div className="wrap" style={{ position: "relative" }}>
      {/* Decorative BG */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        {BG_IMAGES.map((img, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: img.top,
              left: img.left || undefined,
              right: img.right || undefined,
              width: img.size + "px",
              height: img.size * 0.56 + "px",
              transform: `rotate(${img.rot}deg)`,
              opacity: img.op,
              borderRadius: "14px",
              overflow: "hidden",
              border: "2px solid rgba(255,255,255,0.35)",
              boxShadow: "0 6px 28px rgba(155,93,229,0.35)",
            }}
          >
            <img
              src={`https://img.youtube.com/vi/${img.id}/hqdefault.jpg`}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(1.2) brightness(1.05)" }}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        ))}
        {WATERMARKS.map((w, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: w.top + "%",
              left: w.left + "%",
              fontSize: w.size,
              fontFamily: "'Playfair Display',serif",
              fontWeight: 700,
              color: "rgba(255,255,255,0.055)",
              transform: `rotate(${w.rot}deg)`,
              userSelect: "none",
              whiteSpace: "nowrap",
              letterSpacing: "2px",
            }}
          >
            {w.t}
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "26px" }}>
          <h2 className="stitle" style={{ marginBottom: "6px" }}>BTS Corner 💜</h2>
          <p className="ssub">For Meenama — a true ARMY 🌸</p>
        </div>

        {/* Members */}
        <div className="glass" style={{ padding: "22px 18px", marginBottom: "22px" }}>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "21px", color: "#fff", marginBottom: "16px" }}>
            Bangtan Sonyeondan 🎤
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {MEMBERS.map((m) => (
              <div
                key={m.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 14px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.18)",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: m.c + "44",
                    border: `2px solid ${m.c}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  {m.e}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: "14px" }}>{m.name}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)" }}>{m.role}</div>
                </div>
                <div style={{ marginLeft: "auto", fontSize: "18px" }}>💜</div>
              </div>
            ))}
          </div>
        </div>

        {/* Playlist */}
        <div className="glass" style={{ padding: "22px 18px", marginBottom: "22px" }}>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "21px", color: "#fff", marginBottom: "6px" }}>
            Playlist for Meenama 🎵
          </h3>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", marginBottom: "12px" }}>
            Tap a song — it plays right here ▶
          </p>

          {/* Inline player */}
          {ytSong && (
            <div style={{ marginBottom: "16px", borderRadius: "16px", overflow: "hidden", border: "1.5px solid rgba(255,255,255,0.4)" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 14px",
                  background: "rgba(255,255,255,0.15)",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "14px", fontWeight: 700, color: "#fff" }}>
                    {ytSong.title}
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)" }}>
                    BTS · {ytSong.year} · {ytSong.mood}
                  </div>
                </div>
                <button
                  onClick={() => setYtSong(null)}
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    border: "none",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    color: "#fff",
                    fontSize: "16px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ✕
                </button>
              </div>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  src={`https://www.youtube.com/embed/${ytSong.ytId}?autoplay=1&rel=0`}
                  title={ytSong.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
            </div>
          )}

          {/* Song list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {BTS_SONGS.map((s) => (
              <div
                key={s.id}
                className={"song-card" + (ytSong && ytSong.id === s.id ? " playing" : "")}
                onClick={() => setYtSong(s)}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    flexShrink: 0,
                    background: "rgba(255,255,255,0.2)",
                    border: "1.5px solid rgba(255,255,255,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#fff",
                    textAlign: "center",
                    lineHeight: 1.2,
                    padding: "4px",
                  }}
                >
                  #{s.id}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: "14px", marginBottom: "3px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {s.title}
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.65)" }}>
                    BTS · {s.year} · {s.mood}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "24px", flexShrink: 0 }}>
                  {wHeights.slice(0, 8).map((h, i) => (
                    <div key={i} style={{ width: "3px", borderRadius: "2px", background: "linear-gradient(to top,#fff,#FFD6EC)", height: h + "%", opacity: 0.7 }} />
                  ))}
                </div>
                <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "20px", flexShrink: 0 }}>
                  {ytSong && ytSong.id === s.id ? "▶" : "▷"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bubble pop game */}
        <BubblePop />
      </div>
    </div>
  );
}