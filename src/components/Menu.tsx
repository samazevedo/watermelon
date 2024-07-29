import { useState } from "react"
import { Hamburger } from "./Hamburger"

export const Menu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div>
			<Hamburger isOpen={isOpen} onClick={toggleMenu} />
			{isOpen && (
				<div
					style={{
						background: "#32323296",
						padding: "10px",
						position: "fixed",
						top: "0.5rem",
						right: "0.5rem",
						borderRadius: "5px",
					}}
				>
					{/* <ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul> */}
				</div>
			)}
		</div>
	)
}
