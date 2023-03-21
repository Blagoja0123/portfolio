import Nav from "./components/Nav"
import {EarthCanvas} from "./components/canvas/Earth"
import {StarsCanvas} from "./components/canvas/Stars"


function App() {
  return (
    <>
      <div className="h-full w-full">
        <Nav/>
        <StarsCanvas />
        {/* <EarthCanvas/> */}
      </div>
      {/* <div className="text-red-900">Hello</div> */}

    </>
  )
}

export default App
