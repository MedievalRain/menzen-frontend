import { Navigate } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import PagesLayout from "./pages/PagesLayout/PagesLayout";
import { PropsWithChildren, Suspense, lazy } from "react";
import Loader from "./ui/Loader/Loader";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const TablesPage = lazy(
  () => import("./pages/CollectionsPage/CollectionsPage")
);
const VerificationPage = lazy(() => import("./pages/VerificationPage"));
const CollectionPage = lazy(
  () => import("./pages/CollectionPage/CollectionPage")
);
const CoinPage = lazy(() => import("./pages/CoinPage/CoinPage"));

const LazyRoute = ({ children }: PropsWithChildren) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

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
        element: (
          <LazyRoute>
            <RegisterPage />{" "}
          </LazyRoute>
        ),
      },
      {
        path: "login",
        element: (
          <LazyRoute>
            <LoginPage />
          </LazyRoute>
        ),
      },
      {
        path: "verification",
        element: (
          <LazyRoute>
            <VerificationPage />
          </LazyRoute>
        ),
      },
      {
        path: "verification/:userId",
        element: (
          <LazyRoute>
            <VerificationPage />
          </LazyRoute>
        ),
      },
      {
        path: "app",
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Navigate replace to="collections" />,
          },
          {
            path: "collections",
            children: [
              {
                index: true,
                path: "",
                element: (
                  <LazyRoute>
                    <TablesPage />
                  </LazyRoute>
                ),
              },
              {
                path: ":collectionId",
                children: [
                  {
                    index: true,
                    path: "",
                    element: (
                      <LazyRoute>
                        <CollectionPage />
                      </LazyRoute>
                    ),
                  },
                  {
                    path: "coin/:coinId",
                    element: (
                      <LazyRoute>
                        <CoinPage />
                      </LazyRoute>
                    ),
                  },
                  { path: "coin", element: <Navigate to={".."} /> },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
