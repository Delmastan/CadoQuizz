import React from "react";
import "./Roulette.scss";
import { ButtonGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useOptions } from "../../contexts/PlayerContext";

function Roulette() {
  const { setCategory } = useOptions();
  const handleButtonClick = (newCategory) => {
    setCategory(newCategory);
  };

  const navigate = useNavigate();

  const handleValidationClick = () => {
    navigate(`/demarrer`);
  };

  return (
    <div className="roulette-component">
      <ButtonGroup>
        <Button
          variant="primary"
          onClick={() => handleButtonClick("tv_cinema")}
        >
          TV et Cinéma
        </Button>
        <Button variant="primary" onClick={() => handleButtonClick("musique")}>
          Musique
        </Button>
        <Button variant="primary" onClick={() => handleButtonClick("sport")}>
          Sport
        </Button>
        <Button
          variant="primary"
          onClick={() => handleButtonClick("art_litterature")}
        >
          Art et Littérature
        </Button>
        <Button
          variant="primary"
          onClick={() => handleButtonClick("actu_politique")}
        >
          Actualité et Politique
        </Button>
        <Button
          variant="primary"
          onClick={() => handleButtonClick("culture_generale")}
        >
          Culture générale
        </Button>
      </ButtonGroup>
      <div className="button-validation">
        <Button variant="primary" onClick={handleValidationClick}>
          Démarrer
        </Button>
      </div>
      <div className="test-roulette-component">""</div>
    </div>
  );
}

export default Roulette;
