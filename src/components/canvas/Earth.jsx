import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import map from '../../assets/earthmap.jpg'
import atmo from '../../assets/sphere.png'
import normalTexture from '../../assets/normalmap.jpg';
import { Suspense, useRef } from 'react';
import { GradientTexture, Preload } from '@react-three/drei';
import CircleAbs from './CircleAbs';

const Earth = () =>{
    const texture = useLoader(THREE.TextureLoader, map);
    const normal = useLoader(THREE.TextureLoader, normalTexture);
    const ref = useRef();

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <mesh rotation={[0, 0, Math.PI / 4]} ref={ref}>
            <ambientLight intensity={1}/>
            <sphereGeometry attach={"geometry"} args={[3.5, 40, 40]}/>
            <meshBasicMaterial map={texture} specularMap={normal}/>
        </mesh>
    )
}

    const init = 0x04007D;
    
    const to = 0x4F79C3;
const Atmosphere = () =>{

    const circleTexture = useLoader(THREE.TextureLoader, atmo);

    return (
        <mesh className='-z-30'>
            <ambientLight intensity={1}/>
            <circleGeometry attach={"geometry"} args={[4, 25]}/>
            <meshBasicMaterial map={circleTexture} transparent={true} opacity={1}/>
        </mesh>
    )
}

const Shadesphere = () =>{
    return (
        <mesh className='-z-20'>
            <circleGeometry attach={"geometry"} args={[6.5, 25]}/>
            <meshBasicMaterial color={0x4F79C3} transparent={true} opacity={0.5}/>
        </mesh>
    )
}

const DarkShadesphere = () =>{
    return (
        <mesh className='-z-20'>
            <circleGeometry attach={"geometry"} args={[6.1, 25]}/>
            <meshBasicMaterial color={0x04007D} transparent={false} opacity={1.0}/>
        </mesh>
    )
}

const Test = () =>{
    return (
        <mesh>
            <sphereGeometry attach={"geometry"} args={[5.25, 40, 40]}/>
            <meshBasicMaterial color={0x87D4E4} transparent={true} opacity={0.5}/>
        </mesh>
    )
}

export const EarthCanvas = () =>{
    return(
        <div className='w-full h-full absolute inset-0'>
            <Canvas camera={{ position: [0, 0, 10] }}>
                <Suspense>
                    {/* <DarkShadesphere/>
                    <Shadesphere/>
                    <Atmosphere/> */}
                    {/* <CircleAbs color={0x87D4E4} size={[6.5, 25]} opacity={0.5}/> */}
                    {/* <CircleAbs color={[0x87D4E4, 0x000000]} size={[6.75, 25]} opacity={0.4}/> */}
                    <Atmosphere/>
                    <Earth/>
                </Suspense>
                <Preload all/>
            </Canvas>
            {/* <img src={atmo} alt="" /> */}
        </div>
    )
}

export default {EarthCanvas};