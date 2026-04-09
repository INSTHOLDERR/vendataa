import { useState } from "react";
import { Confetti } from "./Sharedcomponents";

const TIMELINE = [
  { e:"💬", title:"We met on ch",        text:"We met on ch, and I really liked your personality from the very first message." },
  { e:"🗣️", title:"The way you talk",      text:"I loved the way you talk with people — so warm, so real. It drew me in completely." },
  { e:"💗", title:"I fell for you",         text:"I fell for you even before you said you like me. You didn't know, but I already knew." },
  { e:"🌙", title:"We started talking a lot",text:"We started talking a lot, every single night. Those conversations became my favorite part of the day." },
  { e:"😔", title:"My mistakes",            text:"I made many mistakes, but you kept forgiving me. You have a heart bigger than I deserve." },
  { e:"📈", title:"Growing more every day", text:"Every day I'm falling more in love with you. It doesn't stop — it only gets deeper." },
  { e:"✈️", title:"I want to meet you",     text:"I really want to come and meet you. I think about it all the time." },
  { e:"🌟", title:"Planning for us",        text:"I'm planning many things for us. There's so much I want to share and do together with you." },
  { e:"🌊", title:"Problems right now",     text:"I know there are some problems right now. But I'm not going anywhere. I'll face them with you." },
  { e:"🤝", title:"Full honesty",           text:"I will share everything with you honestly. No more hiding, no more half-truths. Just us." },
  { e:"🕊️", title:"Coming with peace",     text:"Once things are settled, I will come with a peaceful mind — ready to be fully present for you." },
  { e:"🌱", title:"You changed me",         text:"After meeting you, I started changing. You made me want to be better." },
  { e:"💪", title:"Improving myself",       text:"I'm trying to improve myself. Working on becoming a better person, step by step, for you." },
  { e:"🔧", title:"Fixing my life",         text:"I'm trying to fix my life step by step. It's slow, but I'm moving — because of you." },
  { e:"💜", title:"All because of you",     text:"All these changes happened because of you. You are the reason I want to be more." },
  { e:"✨", title:"What I feel is real",    text:"What I feel for you is real. This is not a joke for me. You mean a lot in my life — you are something truly special to me." },
];

const PROMISES = [
  { e:"🌸", t:"To always make you smile, even on the hardest days." },
  { e:"💜", t:"To watch every BTS comeback with you, no matter what." },
  { e:"💗", t:"To choose you, over and over, in every version of my life." },
  { e:"✨", t:"To be someone you're proud of — every single day." },
  { e:"🎶", t:"To learn the BTS songs you love, just to see you light up." },
  { e:"🙏", t:"To never repeat the mistake that hurt you. Never." },
];

export default function UsPage() {
  const [photos, setPhotos] = useState(Array(6).fill(null));
  const [letter, setLetter] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handlePhoto = (idx, e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPhotos((p) => {
      const n = [...p];
      n[idx] = URL.createObjectURL(file);
      return n;
    });
  };

  const openLetter = () => {
    setLetter(true);
    setConfetti(true);
    setTimeout(() => setConfetti(false), 4000);
  };

  const sendMessage = () => {
    if (!msg.trim()) return;
    setSending(true);
    const subject = encodeURIComponent("💗 Message from Meenama's Website");
    const body = encodeURIComponent(
      `From: ${name || "Meenama"}\n\nMessage:\n${msg}\n\n---\nSent from your special website 💗`
    );
    window.location.href = `mailto:nikhilpramod425@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => { setSent(true); setSending(false); }, 1000);
  };

  return (
    <div className="wrap">
      <Confetti on={confetti} />

      <div style={{ textAlign: "center", marginBottom: "26px" }}>
        <h2 className="stitle" style={{ marginBottom: "6px" }}>Our Story ✨</h2>
        <p className="ssub">Every great love story has chapters, Meenama 🌸</p>
      </div>

      {/* Photo grid */}
      <div className="glass" style={{ padding: "22px 18px", marginBottom: "22px" }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "21px", color: "#fff", marginBottom: "6px" }}>
          vendattaaaa 📸
        </h3>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", marginBottom: "16px" }}>
          your fav pics 🌸 — tap any slot to add
        </p>
        <div className="g3">
          {photos.map((src, i) => (
            <div key={i} className="photo-slot">
              {src ? (
                <img src={src} alt={"Memory " + (i + 1)} />
              ) : (
                <>
                  <div style={{ fontSize: "28px" }}>🌸</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", fontWeight: 600, textAlign: "center" }}>
                    Add photo
                  </div>
                </>
              )}
              <input type="file" accept="image/*" onChange={(e) => handlePhoto(i, e)} />
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="glass" style={{ padding: "26px 20px", marginBottom: "22px" }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "21px", color: "#fff", marginBottom: "20px" }}>
          Our Timeline
        </h3>
        {TIMELINE.map((t, i) => (
          <div key={i} className="tl-item">
            <div className="tl-dot">{t.e}</div>
            <div>
              <h4 style={{ fontFamily: "'Playfair Display',serif", fontSize: "17px", fontWeight: 700, color: "#fff", marginBottom: "5px" }}>
                {t.title}
              </h4>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", lineHeight: 1.75 }}>{t.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Promises */}
      <div className="glass" style={{ padding: "24px 20px", marginBottom: "22px" }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "21px", color: "#fff", marginBottom: "16px" }}>
          My promises to you 🤝
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
          {PROMISES.map((p, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                padding: "13px 14px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <span style={{ fontSize: "20px", flexShrink: 0 }}>{p.e}</span>
              <p style={{ fontSize: "13px", color: "#fff", lineHeight: 1.65, fontWeight: 500 }}>{p.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Letter */}
      <div className="glass" style={{ padding: "28px 22px", marginBottom: "22px", textAlign: "center" }}>
        {!letter ? (
          <>
            <div style={{ fontSize: "54px", marginBottom: "14px" }}>💌</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "23px", color: "#fff", marginBottom: "8px" }}>
              A letter from my heart
            </h3>
            <p className="ssub" style={{ marginBottom: "20px" }}>I wrote you something. Tap when you're ready 🌸</p>
            <button className="btn-rose" onClick={openLetter}>Open my letter 💗</button>
          </>
        ) : (
          <div className="slu">
            <div style={{ fontSize: "46px", marginBottom: "14px" }}>💗</div>
            <div
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(15px,3.8vw,18px)",
                fontStyle: "italic",
                color: "#fff",
                lineHeight: 1.9,
                textAlign: "left",
              }}
            >
              <p>Dear Thilothama,</p>
              <br />
              <p>I know I hurt you. The mistake was entirely mine and there is no excuse in the world good enough for that. You trusted me, and I let you down. I am deeply, truly sorry.</p>
              <br />
              <p>I don't want to imagine a single day without you in it. So I'm asking — please, give me the chance to make it right. I will spend every day proving I'm worth it.</p>
              <br />
              <p>I love you more than any words, more than any song. Always and always.</p>
              <br />
              <p style={{ fontWeight: 700 }}>Yours, completely. 💜</p>
            </div>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
              <span className="pill">Always yours 💗</span>
              <span className="pill">I purple you 💜</span>
              <span className="pill">Meenama 🌸</span>
            </div>
          </div>
        )}
      </div>

      {/* Message form */}
      <div className="glass" style={{ padding: "26px 22px" }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "22px", color: "#fff", marginBottom: "6px" }}>
          Send me a message 💌
        </h3>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", marginBottom: "18px" }}>
          Write anything — I'll receive it in my heart (and inbox 😊)
        </p>

        {!sent ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input
              className="name-input"
              placeholder="Your name (optional) 🌸"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="msg-input"
              placeholder="Type your message here... 💗"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <button
              className="btn-rose"
              onClick={sendMessage}
              disabled={sending || !msg.trim()}
              style={{ alignSelf: "flex-start", opacity: !msg.trim() || sending ? 0.6 : 1 }}
            >
              {sending ? "Sending... 📨" : "Send message 💌"}
            </button>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)" }}>
              📧 Sends to nikhilpramod425@gmail.com
            </p>
          </div>
        ) : (
          <div className="slu" style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>💌</div>
            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "20px", color: "#fff", marginBottom: "8px" }}>
              Message sent! 💗
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>
              I'll read every word, Meenama. Thank you 🌸
            </p>
            <button
              className="btn-ghost"
              style={{ marginTop: "16px" }}
              onClick={() => { setSent(false); setMsg(""); setName(""); }}
            >
              Send another 💕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}