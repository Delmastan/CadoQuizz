import React from "react";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <h1 className="context">
      <nav>
        <p>Navbar</p>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </h1>
  );
}

export default App;
