import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UpperNavbar from './components/upperNavbar'
import Home from './home'
import Services from './services'
import Footer from './components/Footer'
import Product from './Product'
import EvenHandling from './evenHandling'

function App() {

  return (
    <>
    {/* <Product/> */}
      {/* <div className=''>
        <UpperNavbar />
        <Home />
        <Services />
        <Footer/>
      </div> */}
      <EvenHandling/>
    </>
  )
}

export default App
