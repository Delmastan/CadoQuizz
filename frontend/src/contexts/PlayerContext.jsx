import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ApiContext = createContext();

export default function PlayerProvider({ children }) {
  const [players, setPlayers] = useState([]);

  const value = useMemo(
    () => ({
      players,
      setPlayers,
    }),
    [players]
  );

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

PlayerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePlayers = () => useContext(ApiContext);
