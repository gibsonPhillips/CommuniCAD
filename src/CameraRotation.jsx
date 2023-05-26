import React, { useRef } from 'react';
import { useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

export default function CameraRotation() {
    const controlsRef = useRef();
    const { camera, gl } = useThree();

    useFrame(() => {
        controlsRef.current.update();
    });

    return (
        <orbitControls
            ref={controlsRef}
            args={[camera, gl.domElement]}
            autoRotate
            enableZoom={false}
            enablePan={false}
        />
    );
};
