import { Navigate } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import LoginPage from "./pages/LoginPage";
import PagesLayout from "./pages/PagesLayout/PagesLayout";
import RegisterPage from "./pages/RegisterPage";
import TablesPage from "./pages/TablesPage/TablesPage";
import VerificationPage from "./pages/VerificationPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PagesLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/app" />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "verification",
        element: <VerificationPage />,
      },
      {
        path: "verification/:userId",
        element: <VerificationPage />,
      },
      {
        path: "app",
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Navigate replace to="tables" />,
          },
          {
            path: "tables",
            element: <TablesPage />,
          },
        ],
      },
    ],
  },
]);
