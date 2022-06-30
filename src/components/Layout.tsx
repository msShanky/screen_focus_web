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
		<>
			<AppHeader />
			<main className="relative p-4 mb-20">{children}</main>
			<AppFooter />
		</>
	);
};

export default Layout;
