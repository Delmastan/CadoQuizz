import React, { useEffect, useState } from "react";
import "./FinalResults.scss";
import { useNavigate } from "react-router-dom";
import Ranking from "../components/Ranking/Ranking";
import { useOptions } from "../contexts/PlayerContext";

function FinalResults() {
  const navigate = useNavigate();
  const { limit, players } = useOptions();
  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    if (!limit) {
      navigate("/");
    }
  }, []);

  const handleClickRefresh = () => {
    window.location.reload(false);
  };

  const sortedPlayers = players.slice().sort((a, b) => b.points - a.points);
  const firstPlayer = sortedPlayers[0];

  return (
    <div className="finalresults-container">
      <button
        type="button"
        className="finalresults-modal"
        style={{ display: isClosed ? "flex" : "none" }}
        onClick={() => setIsClosed(!isClosed)}
      >
        {firstPlayer && (
          <>
            <h1>{firstPlayer.name} est le grand gagnant</h1>
            <p>Il peut donc choisir son cadeau en premier</p>
            <p className="finalresults-instructions">
              Les autres joueurs, choisissez vos cadeaux dans l'ordre de vos
              rangs
            </p>
          </>
        )}
      </button>
      <h1 className="finalresults-title">Classement Final</h1>
      <Ranking />
      <button
        className="finalresults-restart"
        type="button"
        onClick={handleClickRefresh}
      >
        Recommencer
      </button>
    </div>
  );
}

export default FinalResults;
