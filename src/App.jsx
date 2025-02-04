import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
import Team from './components/Team'
import Clientele from './components/Clientele'
import Form from './components/Form'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'
import Passionate from './components/Passionate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <HeroSection/>
        <About/>
        <Team/>
        <Passionate/>
        <Services/>
        <Clientele/>
        <Form/>
        <Footer/>
      </div>
    </>
  )
}

export default App
