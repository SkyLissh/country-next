import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<link rel="icon" href="/favicon.ico" />

				<meta name="author" content="SkyLissh" />
				<meta
					name="description"
					content="A page to show the use case of Country API, the main idea is from FrontendMentor"
				/>
				<meta
					name="theme-color"
					media="(prefers-color-scheme: light)"
					content="#ffffff"
				/>
				<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2B3945" />

				{/* Opengraph  */}
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="A page to show the use case of Country API, the main idea is from FrontendMentor"
				/>
				<meta property="og:url" content="https://country.skylissh.me" />
				<meta property="og:image" content="/desktop-preview.jpg" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SkyLissh" />
				<meta name="twitter:creator" content="@SkyLissh" />
				<meta
					name="twitter:description"
					content="A page to show the use case of Country API, the main idea is from FrontendMentor"
				/>
				<meta name="twitter:image:src" content="/desktop-preview.jpg" />

				{/* Google Fonts */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<body className="bg-gray-100 dark:bg-midnight-200">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
