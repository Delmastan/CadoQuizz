import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import "./Roue.scss";
import { useNavigate } from "react-router-dom";
import tv from "../../assets/icons/tv-free-2-svgrepo-com.svg";
import art from "../../assets/icons/art-palette-svgrepo-com.svg";
import music from "../../assets/icons/music-svgrepo-com.svg";
import sport from "../../assets/icons/sport-recreation-football-activity-ball-svgrepo-com.svg";
import politic from "../../assets/icons/policy-term-and-condition-term-svgrepo-com.svg";
import qi from "../../assets/icons/brain-svgrepo-com.svg";
import { useOptions } from "../../contexts/PlayerContext";

const data = [
  {
    image: { uri: tv, sizeMultiplier: 0.8 },
    style: { backgroundColor: "red", textColor: "black" },
    category: "tv_cinema",
  },
  {
    image: { uri: art },
    style: { backgroundColor: "white", textColor: "black" },
    category: "art_litterature",
  },
  {
    image: { uri: music },
    style: { backgroundColor: "red", textColor: "black" },
    category: "musique",
  },
  {
    image: { uri: politic, sizeMultiplier: 0.9 },
    style: { backgroundColor: "white", textColor: "black" },
    category: "actu_politique",
  },
  {
    image: { uri: sport },
    style: { backgroundColor: "red", textColor: "black" },
    category: "sport",
  },
  {
    image: { uri: qi },
    style: { backgroundColor: "white", textColor: "black" },
    category: "culture_generale",
  },
];

export default function Roue() {
  const { setCategory, limit } = useOptions();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const navigate = useNavigate();
  const [canProceed, setCanProceed] = useState(false);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setCanProceed(false);
    }
  };

  const handleValidationClick = () => {
    navigate(`/demarrer`);
  };

  useEffect(() => {
    if (!limit) {
      navigate("/");
    }
  }, []);

  return (
    <div className="roue-component">
      <button type="button" className="button-spin" onClick={handleSpinClick}>
        Tourne la roue !
      </button>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          setPrizeNumber((prevPrizeNumber) => {
            setCategory(data[prevPrizeNumber].category);
            setCanProceed(true);
            // eslint-disable-next-line no-restricted-syntax
            console.log(data[prevPrizeNumber].category);
            return prevPrizeNumber;
          });
        }}
        textDistance={70}
        spinDuration={0.01}
      />
      <button
        type="button"
        className="button-next"
        onClick={handleValidationClick}
        disabled={!canProceed || setCategory === undefined}
      >
        Suivant
      </button>
    </div>
  );
}
