import * as THREE from "three"
import { Suspense, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { Watermelon } from "./components/Watermelon"
import { Page } from "./components/Page"
import { DepthOfField, EffectComposer } from "@react-three/postprocessing"

const Box = ({ z }: { z: number }) => {
	const meshRef = useRef<THREE.Mesh>(null!)
	const { viewport, camera } = useThree()
	const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])

	const [data] = useState({
		x: THREE.MathUtils.randFloatSpread(2),
		y: THREE.MathUtils.randFloatSpread(viewport.height),
		rX: Math.random() * Math.PI,
		rY: Math.random() * Math.PI,
		rZ: Math.random() * Math.PI,
	})

	useFrame(() => {
		meshRef.current.position.set(data.x * width, (data.y += 0.01), z)
		if (data.y > height / 1.5) data.y = -height / 1.5

		meshRef.current.rotation.set(
			(data.rX += 0.01),
			(data.rY += 0.001),
			(data.rZ += 0.001)
		)
	})

	return (
		<mesh ref={meshRef}>
			<Watermelon />
		</mesh>
	)
}

function App({ count = 100, depth = 70 }) {
	return (
		<>
			<Canvas
				gl={{ alpha: false }}
				camera={{
					fov: 30,
					near: 0.01,
					far: 110,
				}}
			>
				<color attach="background" args={["#F44E4E"]} />
				<ambientLight intensity={0.1} />
				<Environment preset="sunset" />
				<spotLight position={[10, 10, 10]} penumbra={1} intensity={1} />
				<Suspense fallback={null}>
					{Array.from({ length: count }, (_, i) => (
						<Box key={i} z={(-i / count) * depth - 20} />
					))}
					<EffectComposer>
						<DepthOfField
							target={[0, 0, depth / 2]}
							focalLength={1}
							bokehScale={2}
							height={1000}
						/>
					</EffectComposer>
				</Suspense>
			</Canvas>
			<Page />
		</>
	)
}

export default App
