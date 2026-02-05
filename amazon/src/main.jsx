import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Newaccount from "./components/Newaccount/Newaccount.jsx";
import Sales from "./components/Sales/Sales.jsx";
import Addtocart from "./components/addtocart/Addtocart.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/navbar",
    element:<Navbar/>
  },
  {
    path:'/newaccount',
    element:<Newaccount/>
  },
  {
    path:'/sales',
    element:<Sales/>
  },
  {
    path:'/add-to-cart',
    element:<Addtocart/>
  }

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
