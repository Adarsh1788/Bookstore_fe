import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Contactt from './pages/Contactt'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AllBook from './pages/AllBooks'

function App() {
  

  return (
    <>


        {/* <h1 className='text-center text-3xl text-red-600 bg-blue-400 p-50'>Hello world</h1> */}

      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allbooks" element={<AllBook />}></Route>
        <Route path="/contact" element={<Contactt/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
