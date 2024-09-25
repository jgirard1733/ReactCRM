import React from "react";
import { useState } from "react";
import Footer from "./components/footer/footer"
import Home from "./pages/home/Home"
import NavBar from "./components/navbar/navbar"
import Menu from "./components/menu/menu"
import Login from "./pages/login/login"
import Customers from "./pages/customers/customers"
import "./styles/app.scss"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import Products from "./pages/product/products"
import Customer from "./pages/customers/customer"
import Product from "./pages/product/product"

export function App() {

  const Layout = () => {
    return (
      <div className="main">
         <NavBar/>
         <div className="container">
            <div className="menuContainer">
              <Menu/>
            </div>
            <div className="contentContainer">
              <Outlet/>  
            </div> 
          </div>
          <Footer/>
      </div>
     
    )
  }
  const router = createBrowserRouter( [
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <div>About</div>
        },
        {
          path: "/customers",
          element: <Customers/>
        },
        {
          path: "/products",
          element: <Products/>
        },
        {
          path: "/customer/:id",
          element: <Customer/>
        },
        {
          path: "/product/:id",
          element: <Product/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}
