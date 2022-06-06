import { FunctionComponent } from "react";
import React from "react";
import Footer from "./common/Footer";
import { Container } from "@mantine/core";

type LayoutProps = {
	children: React.ReactElement;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<Container className="container">
			<main className="mb-20">{children}</main>
			<Footer />
		</Container>
	);
};

export default Layout;
