import React from "react";
import ReactDOM from "react-dom/client";
import { FluentProvider, teamsDarkTheme } from "@fluentui/react-components";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import "./styles.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FluentProvider theme={teamsDarkTheme} className="min-h-screen">
      <RouterProvider router={router} />
    </FluentProvider>
  </React.StrictMode>
);
