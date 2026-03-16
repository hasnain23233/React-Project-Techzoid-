import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Routes, Route } from "react-router";
import Home from './home'
import About from './about';
import UpperNavbar from './components/upperNavbar';
import Service from './service';

function App() {

  return (
    <>
    <UpperNavbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
    </Routes>
    </>
  )
}

export default App
