import React from "react";

export default function BoxColor({ color, typed, isMatch }) {
  return (
    <div className={`box ${isMatch ? "match" : ""}`}>
      <p className="label">{isMatch ? `¡Soy ${color}!` : `No soy ${color}`}</p>
      <p className="typed">{typed || "…"}</p>
    </div>
  );
}