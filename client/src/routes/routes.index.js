import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { CircularProgress } from "@mui/material";
import CSVParser from "../components/CSVParser/CSVParser";

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <CircularProgress
          sx={{
            ...{
              width: 1,
              zIndex: 9999,
              position: "fixed",
              top: "50vh",
              left: "50vw",
            },
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/client",
      element: <MainLayout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
    {
      path: "/admin",
      element: <MainLayout />,
      children: [
        {
          path: "dashboard",
          element: <AdminDashboard />,
        },
      ],
    },
    // {
    //   path:'/test',
    //   element: <CSVParser/>
    // }
  ]);
}

//layouts
const MainLayout = Loadable(
  lazy(() => import("../layouts/mainLayout/mainLayout.component"))
);

const Landing = Loadable(
  lazy(() => import("../pages/landing/landing.component"))
);

const Home = Loadable(lazy(() => import("../pages/home/home.component")));

//admin routes
const AdminDashboard = Loadable(
  lazy(() => import("../pages/adminDashboard/adminDashboard.component"))
);
