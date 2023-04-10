import { BrowserRouter } from "react-router-dom";
import {StarsCanvas} from "./components/canvas";
import {
  About,
  Experience,
  Hero,
  Nav,
  Projects,
  Tech,
  Contact,
  Philosophy,
  Awards,
  Recommend
} from "./components";

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
            <Philosophy/>
            <Experience/>
            <Awards/>
            <Tech/>
            <Projects/>
            <Recommend/>
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
