import { useRef, useMemo } from "react"
import * as THREE from "three"
import { useFrame, useThree } from "@react-three/fiber"
import { vertexShader, fragmentShader } from "../shaders/heroshader"

// 🔹 Config object
const shaderConfig = {
  color: "#1B1A1A",
  spread: 2,
}

// 🔹 Hex → RGB (normalized for THREE: 0 → 1)
function hexToRgbNormalized(hex) {
  const cleanHex = hex.replace("#", "")

  const bigint = parseInt(cleanHex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return new THREE.Vector3(r / 255, g / 255, b / 255)
}

function ShaderPlane({ resolution, progress }) {
  const materialRef = useRef()

  // 🔹 Create uniforms once
  const uniforms = useMemo(() => ({
    uProgress: { value: 0 },
    uResolution: {
      value: new THREE.Vector2(resolution.width, resolution.height)
    },
    uColor: {
      value: hexToRgbNormalized(shaderConfig.color)
    },
    uSpread: {
      value: shaderConfig.spread
    }
  }), [resolution])

  // 🔹 Animate progress
  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uProgress.value = progress
    }
  })

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