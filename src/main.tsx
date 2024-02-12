import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Splash from "./pages/Splash/Splash.tsx";
import getGeo from "./helpers/getGeo.ts";
import Main from "./pages/Main/Main.tsx";
import Error from "./pages/Error/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/:city",
    element: <Main />,
    errorElement: <Error />,
    loader: async ({ params }) => {
      if (params.city) {
        const data = await getGeo(params.city);
        return data;
      }
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
