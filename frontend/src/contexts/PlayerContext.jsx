import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ApiContext = createContext();

export default function PlayerProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [category, setCategory] = useState();
  const [limit, setLimit] = useState();
  const [difficulty, setDifficulty] = useState();

  const value = useMemo(
    () => ({
      players,
      setPlayers,
      category,
      setCategory,
      limit,
      setLimit,
      difficulty,
      setDifficulty,
    }),
    [players, category, limit, difficulty]
  );

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

PlayerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useOptions = () => useContext(ApiContext);
