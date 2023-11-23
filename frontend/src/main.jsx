import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import AddPlayerPage from "./pages/AddPlayerPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <>Home Page</> },
      { path: "/joueur", element: <AddPlayerPage /> },
      { path: "/roue", element: <>Roue</> },
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
