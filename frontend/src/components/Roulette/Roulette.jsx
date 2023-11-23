import React from "react";
import "./Roulette.scss";
import { ButtonGroup, Button } from "react-bootstrap";
import { useOptions } from "../../contexts/PlayerContext";

function Roulette() {
  useOptions();

  return (
    <div className="roulette-component">
      <ButtonGroup>
        <Button variant="primary">TV et Cinéma</Button>
        <Button variant="primary">Musique</Button>
        <Button variant="primary">Sport</Button>
        <Button variant="primary">Art et Littérature</Button>
        <Button variant="primary">Actualité et Politique</Button>
        <Button variant="primary">Culture générale</Button>
      </ButtonGroup>
    </div>
  );
}

export default Roulette;
