import { useState, useRef } from "react"
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Torus, TorusKnot } from '@react-three/drei';
import { DodecahedronGeometry } from "three";
import { OctahedronGeometry } from "three";
import { TorusGeometry } from "three";
import { TorusKnotGeometry } from "three";
import { TubeGeometry } from "three";


export default function Shape2(props) {
    const mesh = useRef();
    const [state, setState] = useState({ isHovered: false, isActive: false });

    // useFrame((state) => {
    //     const time = state.clock.getElapsedTime();
    //     mesh.current.position.y += Math.sin(time * 2) / -100;
    //     mesh.current.rotation.y = mesh.current.rotation.x -= 0.01;
    // })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={[2, 2, 2]}
            onClick={(e) => setState({ ...state, isActive: !state.isActive, })}
            onPointerOver={(e) => setState({ ...state, isHovered: true })}
            onPointerOut={(e) => setState({ ...state, isHovered: false })}>
            <sphereGeometry attach="geometry" args={[1, 16, 16]} />
            <meshStandardMaterial
                attach="material"
                color="white"
                transparent
                roughness={1}
                metalness={0.5}
            />
            {/* <meshBasicMaterial attach="material" map={base} /> */}
        </mesh>
    )
}