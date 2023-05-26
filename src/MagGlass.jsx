import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'


export default function MagGlass() {
    const obj = useLoader(OBJLoader, 'src\\magnifying glass.obj')

    return (

        <primitive position={[0, -.5, 0, 0]} object={obj} scale={[.4, .4, .4, .4]} />)
}