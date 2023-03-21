
import React from 'react'

const CircleAbs = (props) => {
    console.log(props.size);
  return (
    <mesh>
        <circleGeometry attach={"geometry"} args={props.size}/>
        <meshBasicMaterial color={props.color} transparent={true} opacity={props.opacity}/>

    </mesh>
  )
}

export default CircleAbs