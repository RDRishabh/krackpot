import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Team from './components/Team'
import Clientele from './components/Clientele'
import Form from './components/Form'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'
import Passionate from './components/Passionate'
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="passionate">
        <Passionate />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="clients">
        <Clientele />
      </div>
      <div id="contact">
        <Form />
      </div>
      <Footer />
    </div>
  )
}

export default App
