import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import Main from "./layout/Main.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import AddReviews from "./pages/AddReviews.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import ReviewDetails from "./pages/ReviewDetails.jsx";
import AllReviewsPage from "./pages/AllReviewsPage.jsx";
import MyReviews from "./pages/MyReviews.jsx";
import WatchList from "./pages/WatchList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://game-reviews-server-7ud5ihzx7-maruf3088s-projects.vercel.app/reviews"
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/add-reviews",
        element: (
          <PrivateRoute>
            <AddReviews></AddReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "reviews/:id",
        element: (
          <PrivateRoute>
            <ReviewDetails></ReviewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://game-reviews-server-7ud5ihzx7-maruf3088s-projects.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/all-reviews",
        element: <AllReviewsPage></AllReviewsPage>,
        loader: () =>
          fetch(
            "https://game-reviews-server-7ud5ihzx7-maruf3088s-projects.vercel.app/all-reviews"
          ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/game-watchlist",
        element: (
          <PrivateRoute>
            <WatchList></WatchList>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
