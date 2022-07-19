import NextHead from "next/head";

type Props = {
	title: string;
};

export default function Head({ title }: Props) {
	return (
		<NextHead>
			<title>{title}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />

			<meta name="twitter:title" content={title} />
			<meta property="og:title" content={title} />
		</NextHead>
	);
}
