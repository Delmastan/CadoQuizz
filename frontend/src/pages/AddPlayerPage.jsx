import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOptions } from "../contexts/PlayerContext";
import "./AddPlayerPage.scss";

function AddPlayerPage() {
  const { limit, setPlayers } = useOptions();

  const navigate = useNavigate();

  const [playersData, setPlayersData] = useState(
    Array.from({ length: limit }, () => ({ name: "", points: 0 }))
  );

  const handleInputChange = (index, fieldName, value) => {
    const newPlayersData = [...playersData];
    newPlayersData[index][fieldName] = value;
    setPlayersData(newPlayersData);
  };

  const handleClick = () => {
    // Vérifier si au moins un nom est vide
    if (playersData.some((player) => player.name.trim() === "")) {
      // eslint-disable-next-line no-alert
      alert("Veuillez remplir tous les noms des joueurs.");
      return; // Ne pas valider si au moins un nom est vide
    }

    const filteredPlayers = playersData.filter(
      (player) => player.name.trim() !== ""
    );
    setPlayers(filteredPlayers);
    navigate(`/roue`);
  };

  useEffect(() => {
    if (!limit) {
      navigate("/");
    }
  }, []);

  return (
    <div className="addplayerpage-container">
      {playersData.map((player, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <label>Player {index + 1}</label>
          <input
            type="text"
            placeholder={`Player ${index + 1} name`}
            className="addplayerpage-input"
            value={player.name}
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
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
