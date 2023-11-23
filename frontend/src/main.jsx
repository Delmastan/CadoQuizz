import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ShowQuestion from "./components/ShowQuestion/ShowQuestion";

const FecthData = async (limit, category, difficulty) => {
  const response = await fetch(
    `https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=${limit}&categoty${category}&difficulty=${difficulty}`
  );
  const jsonData = await response.json();
  return jsonData;
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <>Home Page</> },
      { path: "/joueur", element: <>Player</> },
      { path: "/roue", element: <>Roue</> },
      {
        path: "/demarrer",
        element: <ShowQuestion />,
        loader: () => {
          return FecthData(6, "tv_cinema", "facile");
        },
      },
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
