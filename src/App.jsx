import About from "./components/About"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Tech from "./components/Tech"
import {EarthCanvas} from "./components/canvas/Earth"
import { MeteorCanvas } from "./components/canvas/Meteor"
import {StarsCanvas} from "./components/canvas/Stars"
import technologies from "./utils/constants"


function App() {
  return (
    <>
      <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-repeat bg-center'>
            <Nav/>
            <Hero />
          </div>
          <About/>
      </div>
        {/* <Tech/> */}
        {/* <EarthCanvas/> */}
        {/* <StarsCanvas /> */}

    </>
  )
}

export default App
