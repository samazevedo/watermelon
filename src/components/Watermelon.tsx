import * as THREE from "three"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

interface WatermelonGLTF extends GLTF {
	nodes: {
		Object_0: THREE.Mesh
		Object_0_1: THREE.Mesh
		Object_0_2: THREE.Mesh
		Object_0_3: THREE.Mesh
	}
	materials: {
		Bottom_textured_1: THREE.Material
		watermelon_inside_textured_1: THREE.Material
		PaletteMaterial001: THREE.Material
		PaletteMaterial002: THREE.Material
	}
}

export const Watermelon = (props: JSX.IntrinsicElements["group"]) => {
	const { nodes, materials } = useGLTF(
		"/watermelon-transformed.glb"
	) as unknown as WatermelonGLTF

	return (
		<group {...props} dispose={null}>
			<group position={[-0.028, -0.293, -0.075]} rotation={[-1.364, 0.083, 0.004]}>
				<mesh
					geometry={nodes.Object_0.geometry}
					material={materials.Bottom_textured_1}
					material-color={"lime"}
				/>
				<mesh
					geometry={nodes.Object_0_1.geometry}
					material={materials.watermelon_inside_textured_1}
					material-color={"red"}
				/>
				<mesh
					geometry={nodes.Object_0_2.geometry}
					material={materials.PaletteMaterial001}
				/>
				<mesh
					geometry={nodes.Object_0_3.geometry}
					material={materials.PaletteMaterial002}
				/>
			</group>
		</group>
	)
}

useGLTF.preload("/watermelon-transformed.glb")
