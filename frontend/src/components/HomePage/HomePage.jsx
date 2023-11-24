import React, { useState } from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import { useOptions } from "../../contexts/PlayerContext";
import SnowScript from "../SnowScript";

function HomePage() {
  const { numberCycle, setNumberCycle, setLimit } = useOptions();
  const [numberPlayer, setNumberPlayer] = useState(1);
  const navigate = useNavigate();

  const handleValidationClick = () => {
    setLimit(numberPlayer);
    navigate(`/joueur`);
  };

  return (
    <div className="home-page">
      <div className="snow-script-container">
        <SnowScript />
      </div>
      <div className="title-home-page">
        <h1>Cadoquiz</h1>
      </div>
      <div className="field-home-page">
        <div className="text-field-home-page">
          <p>Choisissez le nombre de participants</p>
        </div>
        <input
          type="text"
          id="input-field-home-page"
          name="input"
          value={numberPlayer}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), 20);
            setNumberPlayer(value);
          }}
          max={20}
        />
      </div>
      <div className="difficulty-home-page">
        <h2>Choisissez le nombre de cycles</h2>
        <div className="cycle-home-page">
          <input
            type="text"
            id="input-cycle-home-page"
            value={numberCycle}
            onChange={(e) => {
              const value = Math.min(Number(e.target.value), 10);
              setNumberCycle(value);
            }}
            max={10}
          />
        </div>
      </div>
      <div className="validation-button-home-page">
        <button
          type="button"
          className="validation-button"
          onClick={handleValidationClick}
        >
          Valider
        </button>
      </div>
      <div />
    </div>
  );
}

export default HomePage;
