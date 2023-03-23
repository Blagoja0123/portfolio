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
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Nav/>
          <Hero/>
        </div>
        <Tech/>
        <EarthCanvas/>
        <StarsCanvas />
      </div>

    </>
  )
}

export default App
