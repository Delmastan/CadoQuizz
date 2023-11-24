import React from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import PlayerProvider from "./contexts/PlayerContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <PlayerProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </PlayerProvider>
    </div>
  );
}

export default App;
