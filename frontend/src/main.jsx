import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import AddPlayerPage from "./pages/AddPlayerPage";
import HomePage from "./components/HomePage/HomePage";
import Roulette from "./components/Roulette/Roulette";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/joueur", element: <AddPlayerPage /> },
      { path: "/roulette", element: <Roulette /> },
      { path: "/question", element: <>Question</> },
      { path: "/classement", element: <>Classement</> },
      { path: "/resultat", element: <>Resultat</> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
