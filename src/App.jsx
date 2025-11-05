import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  

  return (
    <>


        {/* <h1 className='text-center text-3xl text-red-600 bg-blue-400 p-50'>Hello world</h1> */}

        <Routes>
          <Route path='/'element={<Home/>}></Route>
          <Route path='/login'element={<Login/>}></Route>
        </Routes>
    </>
  )
}

export default App
