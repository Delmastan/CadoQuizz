import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ApiContext = createContext();

export default function PlayerProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [category, setCategory] = useState();
  const [limit, setLimit] = useState();
  const [cycle, setCycle] = useState(1);
  const [numberCycle, setNumberCycle] = useState(1);

  const value = useMemo(
    () => ({
      players,
      setPlayers,
      category,
      setCategory,
      limit,
      setLimit,
      cycle,
      setCycle,
      numberCycle,
      setNumberCycle,
    }),
    [players, category, limit, cycle, numberCycle]
  );

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

PlayerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useOptions = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useOptions must be used within a PlayerProvider");
  }
  return context;
};
