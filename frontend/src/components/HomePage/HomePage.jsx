import React, { useState } from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import { useOptions } from "../../contexts/PlayerContext";

function HomePage() {
  const { setDifficulty, setLimit } = useOptions();
  const [selectedDifficulty, setSelectedDifficulty] = useState("facile");
  const [numberPlayer, setNumberPlayer] = useState();
  const navigate = useNavigate();

  // eslint-disable-next-line no-shadow
  const handleDifficultySelect = (choice) => {
    setSelectedDifficulty(choice);
    setDifficulty(selectedDifficulty);
  };

  const handleValidationClick = () => {
    setLimit(numberPlayer);
    navigate(`/joueur`);
  };

  return (
    <div className="home-page">
      <div className="title-home-page">
        <h1>CADOQUIZ</h1>
      </div>
      <div className="field-home-page">
        <div className="text-field-home-page">
          <p>Nombre de participants:</p>
        </div>
        <input
          type="text"
          id="input-field-home-page"
          name="input"
          value={numberPlayer}
          onChange={(e) => {
            setNumberPlayer(e.target.value);
          }}
          max={20}
        />
      </div>
      <div className="difficulty-home-page">
        <h2>Choisissez la difficulté</h2>
        <div className="button-home-page">
          {" "}
          <button
            type="button"
            className={`easy-button ${
              selectedDifficulty === "facile" ? "selected" : ""
            }`}
            onClick={() => handleDifficultySelect("facile")}
          >
            Facile
          </button>
          <button
            type="button"
            className={`normal-button ${
              selectedDifficulty === "normal" ? "selected" : ""
            }`}
            onClick={() => handleDifficultySelect("normal")}
          >
            Normal
          </button>
          <button
            type="button"
            className={`difficult-button ${
              selectedDifficulty === "difficile" ? "selected" : ""
            }`}
            onClick={() => handleDifficultySelect("difficile")}
          >
            Difficile
          </button>
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
