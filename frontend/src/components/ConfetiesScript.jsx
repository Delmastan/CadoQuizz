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

    frame(); // Initial call to start the confetti animation

    // Cleanup function to stop the animation when the component unmounts
    return () => confetti.reset();
  }, []); // Empty dependency array ensures that the effect runs only once

  return <div className="confetti-container" />; // You can style this div as needed
}

export default ConfettiComponent;
