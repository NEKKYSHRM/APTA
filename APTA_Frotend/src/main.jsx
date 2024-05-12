import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.jsx"
import Influencers from "./components/Nav-Pages/Influencers.jsx";
import AboutUs from "./components/Nav-Pages/AboutUs.jsx";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'influencers',
        element: <Influencers/>
      },
      {
        path: 'about',
        element: <AboutUs/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
