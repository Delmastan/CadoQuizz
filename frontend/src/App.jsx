import React from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import PlayerProvider from "./contexts/PlayerContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
        <Footer />
      </footer>
    </PlayerProvider>
  );
}

export default App;
