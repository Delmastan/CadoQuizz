import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";

function ConfettiComponent() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const colors = ["#bb0000", "#ffffff"];

    const launchConfetti = () => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
    };

    const confettiInterval = setInterval(() => {
      launchConfetti();
    }, 500);

    setTimeout(() => {
      clearInterval(confettiInterval);
      setIsActive(false);
    }, 10000);

    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(confettiInterval);
      confetti.reset();
    };
  }, [isActive]);

  return <div className="confetti-container" />;
}

export default ConfettiComponent;
