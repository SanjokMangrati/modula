const Button = ({ bgColor, color, text, size, borderRadius, onClick }) => {
	return (
		<button
			type="button"
			style={{
				backgroundColor: bgColor,
				color: color,
				borderRadius: borderRadius,
			}}
			className={`text-${size} p-3 hover:drop-shadow-xl`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
