type Props = {
	children: React.ReactNode;
	title: string;
	type?: "button" | "submit" | "reset";

	onClick?: () => void;
};

export default function Button({ children, title, type = "button", onClick }: Props) {
	return (
		<button
			type={type}
			title={title}
			onClick={onClick}
			className="bg-purple-400 text-white font-bold p-3 rounded-full shadow-lg"
		>
			{children}
		</button>
	);
}
