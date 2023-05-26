import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { Suspense } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import img from './assets/screenshit website thing.png'
import './styles.css'

function Image() {
    const texture = useLoader(THREE.TextureLoader, img)
    return (
        <mesh>
            <planeBufferGeometry attach="geometry" args={[3, 3]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    )
}

ReactDOM.render(
    <Canvas colorManagement>
        <Suspense fallback={null}>
            <Image />
        </Suspense>
    </Canvas>,
    document.getElementById('root')
)