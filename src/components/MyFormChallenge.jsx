import React, { useState } from "react";
import BoxColor from "./BoxColor";

const COLORS = ["red", "green", "pink", "yellow", "purple", "white", "blue", "aqua", "olive"];
const SUCCESS_BACKGROUNDS = ["/fondo1.jpg", "/fondo2.jpg", "/fondo3.jpg"];
const FAIL_BACKGROUND = "/fondo4.jpg";

export default function MyFormChallenge() {
  const [typed, setTyped] = useState("");
  const [match, setMatch] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value.trim().toLowerCase();
    setTyped(value);

    const isCorrect = COLORS.includes(value);
    setMatch(isCorrect ? value : null);

    const root = document.getElementById("root");
    if (root) {
      if (isCorrect) {
        const randomImg = SUCCESS_BACKGROUNDS[Math.floor(Math.random() * SUCCESS_BACKGROUNDS.length)];
        root.style.backgroundImage = `url(${randomImg})`;
      } else {
        root.style.backgroundImage = `url(${FAIL_BACKGROUND})`;
      }
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Escribe un color: red, green, pink, yellow, purple, white, blue, aqua, olive"
        value={typed}
        onChange={handleChange}
      />

      <div className="grid">
        {COLORS.map((c) => (
          <BoxColor
            key={c}
            color={c}
            typed={typed}
            isMatch={match === c}
          />
        ))}
      </div>
    </div>
  );
}