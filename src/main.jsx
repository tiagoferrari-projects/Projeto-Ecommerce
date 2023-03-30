import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Products from './views/Products/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCK} />,
  },
/*
  {
    path: "/products/:productId",
    element: <Products data={PRODUCTS_MOCK} />,
  },

  {
    path: "/pay/:payId",
    element: <Pay data={PRODUCTS_MOCK} />,
  },
*/
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


