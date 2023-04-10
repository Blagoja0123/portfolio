import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import map from '/assets/earthmap.jpg'
import atmo from '/assets/sphere.png'
import normalTexture from '/assets/normalmap.jpg';
import { Suspense, useRef } from 'react';
import { GradientTexture, Preload, OrbitControls} from '@react-three/drei';
import CircleAbs from './CircleAbs';
import CanvasLoader from '../Loader';

const Earth = (props) =>{
    const texture = useLoader(THREE.TextureLoader, map);
    const normal = useLoader(THREE.TextureLoader, normalTexture);
    const ref = useRef();

    

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <mesh ref={ref} rotation={[0, 0, Math.PI / 4]}>
            <ambientLight intensity={10}/>
            <OrbitControls enableZoom={false}/>
            <sphereGeometry attach="geometry" args={[5, 40, 40]}/>
            <meshBasicMaterial attach={"material"} map={texture} specularMap={normal}/>
        </mesh>
    )
}

const Atmosphere = () =>{
    return (
        <mesh>
            <ambientLight intensity={100.0} color={0xffffff}/>
            <sphereGeometry attach="geometry" args={[5.5, 40, 40]}/>
            <meshBasicMaterial attach={"material"} color={0xB5F6FF} transparent={true} opacity={0.09}/>
        </mesh>
    )
}

const Subsphere = () =>{
    return (
        <mesh>
            <ambientLight intensity={100.0} color={0xffffff}/>
            <sphereGeometry attach="geometry" args={[5.25, 40, 40]}/>
            <meshBasicMaterial attach={"material"} color={0x86F0FF} transparent={true} opacity={0.09}/>
        </mesh>
    )
}

export const EarthCanvas = () =>{
    return(
            <Canvas camera={{position: [0, 0, 11]}}>
                <Suspense fallback={null}>
                    <Earth/>
                    <Subsphere/>
                    <Atmosphere/>
                </Suspense>
                <Preload all/>
            </Canvas>
    )
}

export default {EarthCanvas};