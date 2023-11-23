import React from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import PlayerProvider from "./contexts/PlayerContext";

function App() {
  return (
    <PlayerProvider>
      <nav>
        <p>Navbar</p>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </PlayerProvider>
  );
}

export default App;
