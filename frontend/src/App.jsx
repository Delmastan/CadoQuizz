import React from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import PlayerProvider from "./contexts/PlayerContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <PlayerProvider>
      <nav>
        <Navbar />
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
