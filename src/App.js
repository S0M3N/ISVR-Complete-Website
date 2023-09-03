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
import TnC from "./pages/TnC";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import Topbar from "./components/Topbar";
import Rocket from "./pages/Rocket";
import Drone from "./pages/Drone";
import Rover from "./pages/Rover";
import Satellite from "./pages/Satellite";
import SpaceMed from "./pages/SpaceMed";
import ComingSoon from "./pages/ComingSoon";

const Layout = () => {
  return (
    <div>
      <Topbar />
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
      { path: "/tnc", element: <TnC /> },
      { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
      { path: "/disclaimer", element: <Disclaimer /> },
      { path: "/division/rocket", element: <ComingSoon /> },
      { path: "/division/drone", element: <ComingSoon /> },
      { path: "/division/rover", element: <ComingSoon /> },
      { path: "/division/satellite", element: <ComingSoon /> },
      { path: "/division/space_medicine", element: <ComingSoon /> },
      { path: "/division/ai_and_robotics", element: <ComingSoon /> },
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
