import React from 'react'
import Navbar from './components/Navbar'
import bg1 from "../src/assets/bg1.jpg"
import Hero from './components/Hero'

function App() {
  return (
    <>
      <div
        className="relative min-h-screen bg-center bg-cover text-white"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="absolute inset-0 bg-blue-950/70"></div>
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>

      </div>
    </>
  )
}

export default App