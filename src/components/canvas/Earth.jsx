import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import map from '../../assets/earthmap.jpg'
import atmo from '../../assets/sphere.png'
import normalTexture from '../../assets/normalmap.jpg';
import { Suspense, useRef } from 'react';
import { GradientTexture, Preload } from '@react-three/drei';
import CircleAbs from './CircleAbs';

const Earth = (props) =>{
    const texture = useLoader(THREE.TextureLoader, map);
    const normal = useLoader(THREE.TextureLoader, normalTexture);
    const ref = useRef();

    

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <mesh ref={ref} rotation={[0, 0, Math.PI / 4]} >
            <ambientLight intensity={1}/>
            <sphereGeometry attach="geometry" args={[3.5, 40, 40]}/>
            <meshBasicMaterial attach={"material"} map={texture} specularMap={normal}/>
        </mesh>
    )
}


export const EarthCanvas = () =>{
    return(
        <div className='w-full h-full absolute inset-0'>
            <Canvas camera={{ position: [0, 0, 10] }}>
                <Suspense>
                    <ambientLight intensity={100}/>
                    <CircleAbs color={0x2F47BF} size={[4.0, 25]} opacity={1}/>
                    <CircleAbs color={0x04007D} size={[4.1, 25]} opacity={0.6}/>
                    <CircleAbs color={0x4F79C3} size={[4.2, 25]} opacity={0.6}/>
                    <CircleAbs color={0x87D4E4} size={[4.35, 25]} opacity={0.3}/>
                    <CircleAbs color={0x000000} size={[4.45, 25]} opacity={0.4}/>
                    <Earth/>
                </Suspense>
                <Preload all/>
            </Canvas>
        </div>
    )
}

export default {EarthCanvas};