import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayerProvider from "./contexts/PlayerContext";
import App from "./App";
import ShowQuestion from "./components/ShowQuestion/ShowQuestion";
import AddPlayerPage from "./pages/AddPlayerPage";
import HomePage from "./components/HomePage/HomePage";
import Roulette from "./components/Roulette/Roulette";
import ActualRanking from "./pages/ActualRanking";
import Roue from "./components/Roue/Roue";
import FinalResults from "./pages/FinalResults";
import Ruling from "./components/Ruling/Ruling";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/joueur", element: <AddPlayerPage /> },
      { path: "/roulette", element: <Roulette /> },
      { path: "/roue", element: <Roue /> },
      {
        path: "/demarrer",
        element: <ShowQuestion />,
      },
      { path: "/classement", element: <ActualRanking /> },
      { path: "/resultat", element: <FinalResults /> },
      { path: "/regles", element: <Ruling /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PlayerProvider>
      <RouterProvider router={router} />
    </PlayerProvider>
  </React.StrictMode>
);
