import React from "react"

// component imports
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

// page imports
import Home from "./pages/home/Home"
import Add from "./pages/add/Add"
import Messages from "./pages/messages/Messages"
import Message from "./pages/message/Message"
import Orders from "./pages/orders/Orders"
import Gig from "./pages/gig/Gig"
import Gigs from "./pages/Gigs/Gigs"
import MyGigs from "./pages/myGigs/MyGigs"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"


import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/gigs",
          element: <Gigs/>
        },
        {
          path:"/gig/:id",
          element: <Gig/>
        },
        {
          path:"/mygigs",
          element: <MyGigs/>
        },
        {
          path:"/messages",
          element: <Messages/>
        },
        {
          path:"/message/:id",
          element: <Message/>
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path:"/register",
          element: <Register/>
        },
        {
          path:"/orders",
          element: <Orders/>
        },
        {
          path:"/add",
          element: <Add/>
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
