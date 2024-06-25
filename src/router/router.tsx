import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import LandingView from "../pages/LandingView";
import BuyerDashboard from "../pages/BuyerDashboard";
import SellerDadhboard from "../pages/SellerDadhboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "",
        element: <LandingView />,
      },
      {
        path: "/api/properties",
        element: <BuyerDashboard />,
      },
      {
        path: "/api/seller-dashboard",
        element: <SellerDadhboard />,
      },
    ],
  },
]);

export default router;