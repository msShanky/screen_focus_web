import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import Layout from "../components/Layout";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

export default function App(props: AppProps) {
	const { Component, pageProps } = props;
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: "mantine-color-scheme",
		defaultValue: "dark",
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	return (
		<>
			<Head>
				<title>ScreenFocus</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}

