import { useRef } from "react";
import { TABS } from "../constants";

export function Particles() {
  const ps = useRef(
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 96,
      size: 13 + Math.random() * 18,
      dur: 7 + Math.random() * 9,
      delay: Math.random() * 9,
      e: ["💗","💕","🌸","💜","✨","🩷","💖","🌷","⭐","🦋"][i % 10],
    }))
  ).current;

  return (
    <>
      {ps.map((p) => (
        <div
          key={p.id}
          className="ptcl"
          style={{
            left: p.left + "%",
            fontSize: p.size + "px",
            animationDuration: p.dur + "s",
            animationDelay: p.delay + "s",
          }}
        >
          {p.e}
        </div>
      ))}
    </>
  );
}

export function Confetti({ on }) {
  if (!on) return null;
  return (
    <>
      {Array.from({ length: 45 }, (_, i) => (
        <div
          key={i}
          className="cftti"
          style={{
            left: Math.random() * 100 + "%",
            background: ["#FF3D8B","#FF85B3","#C084FC","#FFD166","#FFB3CE","#fff"][i % 6],
            animationDelay: Math.random() * 1.8 + "s",
            transform: `rotate(${Math.random() * 360}deg)`,
            borderRadius: i % 3 === 0 ? "50%" : "2px",
          }}
        />
      ))}
    </>
  );
}

export function Nav({ tab, setTab }) {
  return (
    <nav className="nav">
      <div className="nav-logo">Meenama 💗</div>
      <div className="nav-tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={"ntab" + (tab === t.id ? " on" : "")}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </nav>
  );
}