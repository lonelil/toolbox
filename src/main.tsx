import React from "react";
import ReactDOM from "react-dom/client";
import { FluentProvider, teamsDarkTheme } from "@fluentui/react-components";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "./styles.css";

import Home from "./pages/Home";
import Settings from "./pages/Settings";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FluentProvider theme={teamsDarkTheme} className="min-h-screen">
      <RouterProvider router={router} />
    </FluentProvider>
  </React.StrictMode>,
);
