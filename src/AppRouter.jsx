import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./components/general/Dashboard/Dashboard";
import Profile from "./components/general/CrewProfile/Profile";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./components/general/Home/Home";
import Documents from "./components/general/Documents/Documents";
import { useEffect, useState } from "react";

const HomeWrapper = () => {
  const hasVisited = localStorage.getItem('hasVisitedBefore');
  
  useEffect(() => {
    localStorage.setItem('hasVisitedBefore', 'true');
  }, []);

  if (!hasVisited) {
    return <Navigate to="/crewProfile" replace />;
  }

  return <Home />;
};

function AppRouter() {
  const routes = [
    { path: "/", element: <HomeWrapper /> },
    { path: "/crewProfile", element: <Profile /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/documents", element: <Documents /> },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
