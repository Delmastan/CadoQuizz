import React, { useState } from "react";
import "./HomePage.scss";

function HomePage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
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
        <input type="text" id="input-field-home-page" name="input" />
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
          Intermédiaire
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
