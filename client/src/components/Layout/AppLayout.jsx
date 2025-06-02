import React, { useContext } from "react"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Login from "../Login"
import { AppContext } from "../../context/AppContext"
import { ToastContainer } from "react-toastify"

const AppLayout = () => {
  const { showLogin } = useContext(AppContext)

  return (
    <div
      className="px-4 sm:px-10 md:px-14 lg:px-28 min- min-h-screen bg-gradient-to-b from-purple-100 to-indigo-50
"
    >
      <ToastContainer position="bottom-right" />
      <Navbar />
      {showLogin && <Login />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout
