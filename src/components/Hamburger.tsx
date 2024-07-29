interface HamburgerMenuProps {
	isOpen: boolean
	onClick: () => void
}
export const Hamburger = ({ isOpen, onClick }: HamburgerMenuProps) => {
	return (
		<div
			onClick={onClick}
			style={{
				cursor: "pointer",
				display: "grid",
				placeItems: "center",
				width: "2.5rem",
				height: "2.5rem",
				position: "fixed",
				top: "1rem",
				right: "1rem",
			}}
		>
			<svg viewBox="0 0 100 80" width="40" height="40">
				<rect
					width="100"
					height="20"
					rx="8"
					fill="black"
					style={{
						transition: "transform 0.3s",
						transform: isOpen
							? "rotate(45deg) translate(1rem, -0.5rem)"
							: "rotate(0)",
					}}
				></rect>
				<rect
					y="30"
					width="100"
					height="20"
					rx="8"
					fill="black"
					style={{
						transition: "transform 0.3s",
						transform: isOpen ? "scale(0)" : "scale(1)",
					}}
				></rect>
				<rect
					y="60"
					width="100"
					height="20"
					rx="8"
					fill="black"
					style={{
						transition: "transform 0.3s",
						transform: isOpen
							? "rotate(-45deg) translate(-2rem, 0.5rem)"
							: "rotate(0)",
					}}
				></rect>
			</svg>
		</div>
	)
}
