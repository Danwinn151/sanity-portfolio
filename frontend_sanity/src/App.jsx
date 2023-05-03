import { useState } from 'react'
import {About, Testimonial, Work, Footer, Header, Skills} from "../container/index"
import {Navbar} from "../components"
import "./App.scss"
function App() {

  return (
    <div className="app">
       <Navbar/>
        <Header/>
        <About/> 
        <Work/>
        <Skills/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default App
