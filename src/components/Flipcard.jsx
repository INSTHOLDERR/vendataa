import { useState } from "react";

export default function FlipCard({ e, title, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={"fwrap" + (flipped ? " flipped" : "")}
      onClick={() => setFlipped((f) => !f)}
      style={{ height: "168px" }}
    >
      <div className="finner">
        <div className="ffront glass">
          <div style={{ fontSize: "38px", marginBottom: "9px" }}>{e}</div>
          <div
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "15px",
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.65)", marginTop: "7px" }}>
            tap 💗
          </div>
        </div>
        <div className="fback">
          <p
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "13px",
              color: "#7A0040",
              textAlign: "center",
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
          >
            {back}
          </p>
        </div>
      </div>
    </div>
  );
}