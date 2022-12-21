import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import ContactUsPage from "../pages/ContactUsPage";
import CartPage from "../pages/CartPage";
import EditProductPage from "../pages/EditProductPage";
import { ADMIN } from "../helpers/consts";
import { useAuth } from "../contexts/AuthContext";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/AboutUs", element: <AboutUsPage />, id: 2 },
    { link: "/auth", element: <AuthPage />, id: 3 },
    { link: "/products", element: <ProductsPage />, id: 5 },
    { link: "/products/:id", element: <ProductDetailsPage />, id: 6 },
    { link: "/*", element: <NotFoundPage />, id: 7 },
    { link: "/contactus", element: <ContactUsPage />, id: 8 },
    { link: "/cart", element: <CartPage />, id: 9 },
    // element,
  ];
  const PRIVATE_ROUTES = [
    { link: "/edit/:id", element: <EditProductPage />, id: 10 },
    { link: "/adminPage", element: <AdminPage />, id: 4 },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}

      {user
        ? PRIVATE_ROUTES.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                user.email === ADMIN ? (
                  item.element
                ) : (
                  <Navigate replace to="*" />
                )
              }
            />
          ))
        : null}
    </Routes>
  );
};

export default MainRoutes;
