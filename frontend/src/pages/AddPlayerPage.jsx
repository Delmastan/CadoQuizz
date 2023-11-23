import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOptions } from "../contexts/PlayerContext";
import "./AddPlayerPage.scss";

function AddPlayerPage() {
  const { limit, setPlayers } = useOptions();

  const navigate = useNavigate();

  const [playerNames, setPlayerNames] = useState(
    Array.from({ length: limit }, () => "")
  );

  const handleInputChange = (index, value) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = value;
    setPlayerNames(newPlayerNames);
  };

  const handleClick = () => {
    setPlayers(playerNames);
    navigate(`/roulette`);
  };

  return (
    <div className="addplayerpage-container">
      {playerNames.map((value, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <label>Player {index + 1}</label>
          <input
            type="text"
            className="addplayerpage-input"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={handleClick}>
        Validation
      </button>
    </div>
  );
}

export default AddPlayerPage;
