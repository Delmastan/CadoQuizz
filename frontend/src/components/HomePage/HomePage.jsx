import React, { useState } from "react";
import "./HomePage.scss";
import { useOptions } from "../../contexts/PlayerContext";

function HomePage() {
  const { difficulty, limit, setDifficulty, setLimit } = useOptions();
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  // eslint-disable-next-line no-shadow
  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setDifficulty(difficulty);
  };
  // eslint-disable-next-line no-restricted-syntax
  console.log(difficulty);
  const handleLimitChange = (event) => {
    let newLimit = event.target.value;

    newLimit = Math.min(newLimit, 20);

    setLimit(newLimit);
  };
  // eslint-disable-next-line no-restricted-syntax
  console.log(limit);

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
          value={limit}
          onChange={handleLimitChange}
          max={20}
        />
      </div>
      <div className="difficulty-home-page">
        <h2>Choisissez la difficulté</h2>
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
      <div />
    </div>
  );
}

export default HomePage;
