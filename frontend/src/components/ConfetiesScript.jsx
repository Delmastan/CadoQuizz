import React, { useEffect } from "react";
import confetti from "canvas-confetti";

function ConfettiComponent() {
  useEffect(() => {
    const end = Date.now() + 15 * 1000;
    const colors = ["#bb0000", "#ffffff"];

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    return () => confetti.reset();
  }, []);

  return <div className="confetti-container" />;
}

export default ConfettiComponent;
