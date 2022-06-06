import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
	static getInitialProps = getInitialProps;

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com"></link>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
