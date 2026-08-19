// import { useEffect, useRef } from "react";

// const Character2D = () => {
//   const leftPupilRef = useRef<HTMLDivElement>(null);
//   const rightPupilRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const movePupil = (
//         pupil: HTMLDivElement | null,
//         eyeX: number,
//         eyeY: number
//       ) => {
//         if (!pupil) return;

//         const dx = e.clientX - eyeX;
//         const dy = e.clientY - eyeY;

//         const angle = Math.atan2(dy, dx);

//         const maxMove = 7;

//         const distance = Math.min(
//           Math.sqrt(dx * dx + dy * dy) / 100,
//           1
//         );

//         const x = Math.cos(angle) * maxMove * distance;
//         const y = Math.sin(angle) * maxMove * distance;

//         pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
//       };

//       const leftEye = leftPupilRef.current;
//       const rightEye = rightPupilRef.current;

//       if (!leftEye || !rightEye) return;

//       const leftRect = leftEye.parentElement?.getBoundingClientRect();
//       const rightRect = rightEye.parentElement?.getBoundingClientRect();

//       if (!leftRect || !rightRect) return;

//       const leftX = leftRect.left + leftRect.width / 2;
//       const leftY = leftRect.top + leftRect.height / 2;

//       const rightX = rightRect.left + rightRect.width / 2;
//       const rightY = rightRect.top + rightRect.height / 2;

//       movePupil(leftEye, leftX, leftY);
//       movePupil(rightEye, rightX, rightY);
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="character-2d">

//       <img
//         src="/image/character.png"
//         alt="Yash Character"
//       />

//       {/* LEFT EYE */}
//       <div className="eye eye-left">
//         <div ref={leftPupilRef} className="pupil"></div>
//       </div>

//       {/* RIGHT EYE */}
//       <div className="eye eye-right">
//         <div ref={rightPupilRef} className="pupil"></div>
//       </div>

//     </div>
//   );
// };

// export default Character2D;




import { useEffect, useRef } from "react";

const Character2D = () => {
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!characterRef.current) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      // Very subtle movement
      const moveX = x * 12;
      const moveY = y * 6;
      const rotate = x * 3;

      characterRef.current.style.transform = `
        translate(${moveX}px, ${moveY}px)
        rotateY(${rotate}deg)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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