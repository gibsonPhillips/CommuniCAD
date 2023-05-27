import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Box from './Box'
import ImageBox from './ImageBox'
import MagGlass from './MagGlass'
import Shape1 from './shape1'
import { OrbitControls, Text } from '@react-three/drei'
import CameraRotation from './CameraRotation'
import Shape2 from './Shape2'


export default function App() {

  return (
    <>
      <div class="navbar">
        <button type="button" class="logo">Logo</button>
        <span class="fb">
          {/* just for the flex stuff */}
        </span>
        <a class="navTo" href="#">HOME</a>
        <a class="navTo" href="#">SERVICES</a>
        <a class="navTo" href="#">WHY US?</a>
        <a class="navTo" href="#">LOGIN</a>

      </div>

      <div class="threedee">
        <Canvas color='White'>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />

          <Box
            position={[8, 0, -20]} />
          <ImageBox
            position={[-8, 0, -20]} />


          <Text
            position={[0, .7, 2]}
            scale={[.3, .3, .3, .3]}
            outlineWidth={.06}
            outlineColor="Black">
            Design. Communicate. Oversee.
          </Text>
          <Text
            position={[0, -.2, 2]}
            scale={[.2, .2, .2, .2]}
            outlineWidth={.06}
            outlineColor="Black"
          >
            "Outsourcing under your roof"
          </Text>

          {/* <OrbitControls /> */}
        </Canvas>
      </div >

      <div class='blue-with-text'>
        <div class=" our-services">
          <h1>
            Our Services
          </h1>
          <h3>
            Streamlined services to make outsourcing manufacturing as easy as working in house
          </h3>
        </div>

        <div class="big-three">
          <div class="transparency">
            <div class="canvas-size">
              <a href='https://dryicons.com/free-graphics/3d-font?page=2'>
                <Canvas class="mag-glass">
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <pointLight position={[-10, -10, -10]} />

                  <MagGlass />
                  <CameraRotation />
                  {/* <OrbitControls /> */}
                </Canvas>
              </a>
            </div>

            <h2>
              Simple Transparency
            </h2>

            <ul class="list">
              <li>A dashboard to manage incoming and outgoing communications easily</li>
              <li class="list-item">Monitor all progress</li>
            </ul>
          </div>

          <div class="communication">
            <div class="canvas-size">
              <Canvas class="mag-glass">
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />

                <Shape1 />
                <CameraRotation />
                {/* <OrbitControls /> */}
              </Canvas>
            </div>

            <h2>
              Centralized Communication
            </h2>

            <ul class="list">
              <li>2-way synchronous 3D design viewer and communicator</li>
              <li>File type agnostic commenting and sharing capabilities</li>
              <li>Multi-file type upload and sharing</li>
            </ul>
          </div>

          <div class="plugins">
            <div class="canvas-size">
              <a href='https://dryicons.com/free-graphics/3d-font?page=2'>
                <Canvas class="mag-glass">
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <pointLight position={[-10, -10, -10]} />

                  <Shape2 />
                  <CameraRotation />
                  {/* <OrbitControls /> */}
                </Canvas>
              </a>
            </div>

            <h2>
              ERP/CAD Plugins
            </h2>

            <ul class="list">
              <li>No staff training necessary</li>
              <li>Integrate directly into you existing ERP software</li>
              <li>Connect communiCAD directly into you CAD software</li>
            </ul>
          </div>

        </div>

      </div>
      <div class="mail">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeDVxr514aCg99bU7MgcKGZurF_luYcMwEPgMYS0xagMZn1_w/viewform?embedded=true" width="700" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
      <div class="footer">
        <img class="fLogo" src="src\communicadLogo.png" alt="logo"></img>
      </div >

    </>
  )
}

