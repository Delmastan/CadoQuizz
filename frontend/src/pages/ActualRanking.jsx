import "./ActualRanking.scss";
import { useNavigate } from "react-router-dom";
import Ranking from "../components/Ranking/Ranking";
import { useOptions } from "../contexts/PlayerContext";

function ActualRanking() {
  const { cycle, setCycle } = useOptions();
  const navigate = useNavigate();

  const handleClick = () => {
    setCycle(cycle + 1);
    navigate("/roulette");
  };

  return (
    <div className="actualranking-container">
      <div className="actualranking-title">
        <h1>Classement actuel</h1>
        <p>Round {cycle}</p>
      </div>
      <Ranking />
      <button type="button" onClick={handleClick}>
        Suivant
      </button>
    </div>
  );
}

export default ActualRanking;
