import { useState } from "react";

export default function StarRating({
  maxRating = 5,
  size = 24,
  onSetRating,
}) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleSelect(value) {
    setRating(value);
    onSetRating(value);
  }

  return (
    <div
      style={{ display: "flex", gap: "4px", fontSize: size, cursor: "pointer" }}
    >
      {Array.from({ length: maxRating }, (_, i) => (
        <span
          key={i}
          role="button"
          style={{ color: (tempRating || rating) >= i + 1 ? "gold" : "gray" }}
          onClick={() => handleSelect(i + 1)}
          onMouseEnter={() => setTempRating(i + 1)}
          onMouseLeave={() => setTempRating(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
