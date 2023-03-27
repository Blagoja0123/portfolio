import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import map from '../../assets/earthmap.jpg'
import atmo from '../../assets/sphere.png'
import normalTexture from '../../assets/normalmap.jpg';
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
            <ambientLight intensity={1}/>
            <sphereGeometry attach="geometry" args={[5, 40, 40]}/>
            <meshBasicMaterial attach={"material"} map={texture} specularMap={normal}/>
        </mesh>
    )
}


export const EarthCanvas = () =>{
    return(
            <Canvas camera={{position: [0, 0, 11]}}>
                <Suspense>
                    <ambientLight intensity={100}/>
                    <CircleAbs color={0x0033FF} size={[5.9, 30]} opacity={0.9}/>
                    <CircleAbs color={0x04007D} size={[6, 30]} opacity={0.7}/>
                    <CircleAbs color={0x4F79C3} size={[6.2, 30]} opacity={0.6}/>
                    <CircleAbs color={0x87D4E4} size={[6.35, 30]} opacity={0.3}/>
                    <CircleAbs color={0x000000} size={[6.45, 30]} opacity={0.4}/>
                    <Earth/>
                </Suspense>
                <Preload all/>
            </Canvas>
    )
}

export default {EarthCanvas};