import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import { useRef } from 'react';
import CanvasLoader from '../Loader';


const SphereAbs = (props) =>{
    
    const ref = useRef();

    useFrame((state, delta) =>{
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    })

    return (
        <mesh ref={ref}>
            <OrbitControls enableZoom={false}/>
            <icosahedronGeometry attach={"geometry"} args={[props.scale, props.index]}/>
            <meshBasicMaterial color={props.color} transparent={true} opacity={props.opacity}/>
        </mesh>
    )
}

const GenerateSpheres = () =>{
    const base = 1.0;
    const colors = ['#FCF5CC','#E6B529','#FCBE51','#E6923E','#FF8545'];
    return (
        <>
            {colors.map((color, index) => (
                <SphereAbs key={index} color={color} scale={base+index} index={index} opacity={1.0-0.2*index}/>
            ))}
        </>
    )
}

const Sun = () => {
  return (
    <Canvas camera={{position: [0, 0, 11]}}>
        <Suspense fallback={null}>
            <GenerateSpheres/>
        </Suspense>
        <Preload all/>
    </Canvas>
  )
}

export default Sun