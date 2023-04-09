
const CircleAbs = (props) => {
  return (
    <mesh>
        <circleGeometry attach={"geometry"} args={props.size}/>
        <meshBasicMaterial color={props.color} transparent={true} opacity={props.opacity}/>

    </mesh>
  )
}

export default CircleAbs