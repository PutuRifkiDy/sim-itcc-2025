import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing } from './pages/landing';
import { Competition } from './pages/competition';
import { Merch } from './pages/merch';
import { Semnas } from './pages/semnas';

const router = createBrowserRouter([
  {
    path: "/",
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
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
