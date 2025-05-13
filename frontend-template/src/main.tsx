import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/landing";
import { Competition } from "./pages/competition";
import { Merch } from "./pages/merch";
import { Semnas } from "./pages/semnas";
import { SemnasRegistration } from "./pages/semnas-regisration";
import { CompetitionRegistration } from "./pages/competition-registration";
import { CompetitionRegistrationCreateTeam } from "./pages/competition-registration-create-team";
import { CompetitionRegistrationJoinTeam } from "./pages/competition-registration-join-team";
import "keen-slider/keen-slider.min.css";


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Landing />,
  },
  {
    path: "/competition",
    element: <Competition />,
  },
  {
    path: "/merch",
    element: <Merch />,
  },
  {
    path: "/semnas",
    element: <Semnas />,
  },
  {
    path: "/semnas/registration",
    element: <SemnasRegistration />
  },
  {
    path: "/competition/registration",
    element: <CompetitionRegistration />
  },
  {
    path:"/competition/registration/join-team",
    element: <CompetitionRegistrationJoinTeam/>
  },
  {
    path:"/competition/registration/create-team",
    element: <CompetitionRegistrationCreateTeam />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
