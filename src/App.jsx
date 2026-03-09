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
import Student from './Student'

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
      {/* <EvenHandling/> */}
      <Student name = "Ali" id = {30}  course = "Web Development"/> <br />
      <Student name = "Rohail" id = {30}  course = "Web Development"/> <br />
      <Student name = "Data" id = {30}  course = "Web Development"/>
    </>
  )
}

export default App
