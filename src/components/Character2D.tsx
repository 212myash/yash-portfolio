import { useRef } from "react";

const Character2D = () => {
  const characterRef = useRef<HTMLDivElement>(null);

  return (
    <div className="character-2d" ref={characterRef}>
      <img
        src="/image/character.png"
        alt="Yash Character"
      />
    </div>
  );
};

export default Character2D;