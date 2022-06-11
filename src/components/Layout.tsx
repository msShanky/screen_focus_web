import { FunctionComponent } from "react";
import React from "react";
import AppFooter from "./common/AppFooter";
import AppHeader from "./common/AppHeader";
import { Container } from "@mantine/core";

type LayoutProps = {
	children: React.ReactElement;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<Container className="container">
			<AppHeader />
			<main className="mb-20 p-4">{children}</main>
			<AppFooter />
		</Container>
	);
};

export default Layout;
