import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Unauthorized from '../pages/Unauthorized';
import Cart from '../pages/Cart';
import AdminPanel from '../pages/AdminPanel';
import MainLayout from '../layouts/MainLayout';
import Categories from '../pages/Categories';
import {
  ADMIN_ROUTE,
  CART_ROUTE,
  CATEGORIES_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_DETAIL_ROUTE,
  UNAUTHORIZED_ROUTE,
} from '../utils/consts';
import ProductDetails from '../pages/ProductDetails';

const PrivateRoute = () => {
  const user = true;
  // user.role exists
  return user ? <Outlet /> : <Navigate to={LOGIN_ROUTE} replace />;
};

const AdminRoute = () => {
  const user = false;
  // user.role === 'admin'
  return user ? <Outlet /> : <Navigate to="/unauthorized" replace />;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route path={HOME_ROUTE} element={<Home />}>
          <Route path={PRODUCT_DETAIL_ROUTE} element={<ProductDetails />} />
        </Route>
        <Route path={CATEGORIES_ROUTE} element={<Categories />} />

        <Route element={<PrivateRoute />}>
          <Route path={CART_ROUTE} element={<Cart />} />
        </Route>
      </Route>

      <Route path={LOGIN_ROUTE} element={<Login />} />
      <Route path={UNAUTHORIZED_ROUTE} element={<Unauthorized />} />

      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path={CART_ROUTE} element={<Cart />}>
            <Route path={CART_ROUTE + PRODUCT_DETAIL_ROUTE} element={<ProductDetails />} />
          </Route>
        </Route>
      </Route>

      <Route element={<AdminRoute />}>
        <Route path={ADMIN_ROUTE} element={<AdminPanel />} />
      </Route>

      <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
    </>
  )
);
