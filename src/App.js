import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import NotFound404 from "./pages/NotFound404";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import Cert from "./pages/Cert";
import TechKranti from "./pages/TechKranti";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/services", element: <Services /> },
      { path: "/TechKranti", element: <TechKranti /> },
      { path: "/service/:id", element: <Service /> },
      { path: "/cert/:id", element: <Cert /> },
      { path: "*", element: <NotFound404 /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
