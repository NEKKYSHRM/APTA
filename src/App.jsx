import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Navbar.jsx"
import Footer from './components/Footer/footer.jsx'
import './App.css'

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
