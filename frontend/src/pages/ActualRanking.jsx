import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Ranking from "../components/Ranking/Ranking";
import { useOptions } from "../contexts/PlayerContext";
import "./ActualRanking.scss";

function ActualRanking() {
  const { cycle, setCycle } = useOptions();
  const navigate = useNavigate();
  const [isFinal, setIsFinal] = useState(true);
  const maxRound = 8;

  const handleClick = () => {
    if (cycle < maxRound) {
      setCycle(cycle + 1);
      navigate("/roue");
    } else {
      setIsFinal(false);
    }
  };

  return (
    <div className="actualranking-container">
      <div className="actualranking-title">
        <h1>Classement actuel</h1>
        <p>Round {cycle}</p>
      </div>
      <Ranking />
      {isFinal && (
        <button type="button" onClick={handleClick}>
          Suivant
        </button>
      )}
      ;
    </div>
  );
}

export default ActualRanking;
