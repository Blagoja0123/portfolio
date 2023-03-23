import { Float, useTexture, OrbitControls, Preload, Decal } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import technologies from "../../utils/constants";
import CanvasLoader from "../Loader";


const Meteor = (props) => {

    const [decal] = useTexture([props.img]);
    const ref = useRef();
    
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25}/>
        <directionalLight position={[0, 0, 0.05]}/>
        <mesh castShadow receiveShadow scale={1.5}>
            <dodecahedronGeometry args={[2, 1]}/>
            <meshStandardMaterial 
                color={'#fff8eb'}  
                polygonOffset
                polygonOffsetFactor={-5}
                flatShading/>
            <Decal
                position={[0, 0, 2]}
                rotation={[2*Math.PI, 0, 6.25]}
                scale={1.5}
                map={decal}
                flatShading
            />
        </mesh>
    </Float>
  )
}

export const MeteorCanvas = ({img}) =>{
    return (
        <Canvas 
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls enableZoom={false}/>
                <Meteor img={img}/>
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default MeteorCanvas;