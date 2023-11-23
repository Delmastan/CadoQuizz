/* eslint-disable no-nested-ternary */
import "./Ranking.scss";
// import { useOptions } from "../../contexts/PlayerContext";

function Ranking() {
  const players = [
    { name: "Tristan", points: 150 },
    { name: "Marcelo", points: 200 },
    { name: "Quentin", points: 170 },
    { name: "Arthur", points: 300 },
    { name: "Cyrille", points: 250 },
  ];

  const sortedPlayers = players.slice().sort((a, b) => b.points - a.points);

  return (
    <div className="ranking-container">
      {sortedPlayers.map((player, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={
            index === 0
              ? "ranking-first"
              : index === 1
              ? "ranking-second"
              : index === 2
              ? "ranking-third"
              : "ranking-looser"
          }
        >
          <p>{index + 1}</p>
          <p>{player.name}</p>
          <p>{player.points}</p>
        </div>
      ))}
    </div>
  );
}

export default Ranking;
