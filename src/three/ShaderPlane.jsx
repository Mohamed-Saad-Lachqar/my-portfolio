import {  useRef,useMemo  } from "react"
import * as THREE from "three"
import { useFrame, useThree } from "@react-three/fiber"
import { vertexShader, fragmentShader } from "../shaders/heroshader"
import { useEffect } from "react"

function ShaderPlane({ resolution ,progress  }) {
   const materialRef = useRef()
    // Create uniforms once
  const uniforms = useMemo(() => ({
    uProgress: { value: 0 },
    uResolution: { value: new THREE.Vector2(resolution.width, resolution.height) },
    uColor: { value: new THREE.Vector3(238 / 255, 238 / 255, 238 / 255) },
    uSpread: { value: 1.2 }
  }), [])

 useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uProgress.value =progress;
    }
  });
  const { viewport } = useThree()
  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />


      <shaderMaterial
        ref={materialRef}
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

export default ShaderPlane