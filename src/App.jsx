import { BrowserRouter } from "react-router-dom"
import About from "./components/About"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Tech from "./components/Tech"
import {EarthCanvas} from "./components/canvas/Earth"
import { MeteorCanvas } from "./components/canvas/Meteor"
import {StarsCanvas} from "./components/canvas/Stars"
import technologies from "./utils/constants"
import Sun from "./components/canvas/Sun"
import Contact from "./components/Contact"


function App() {
  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 bg-primary overflow-x-hidden overflow-y-hidden'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Nav/>
              <Hero />
            </div>
            <About/>
            <Experience/>
            <Tech/>
            <Projects/>
            <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
            </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
