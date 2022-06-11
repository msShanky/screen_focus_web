import React from "react";
import Link from "next/link";
import { Button, Text } from "@mantine/core";

const footerLinks = [
	{
		link: "/privacy-policy",
		label: "Privacy Policy",
	},
	{
		link: "/press-release",
		label: "Press Release",
	},
	{
		link: "/gallery",
		label: "Gallery",
	},
	{
		link: "/instagram",
		label: "Instagram",
	},
	{
		link: "/facebook",
		label: "Facebook",
	},
	{
		link: "/twitter",
		label: "Twitter",
	},
];

const AppFooter = () => {
	return (
		<div className="flex flex-row justify-center space-x-4 mb-20">
			{footerLinks.map((link) => {
				const key = link.label;
				return (
					<Link key={key} href={link.link} passHref>
						<Text className="hover:text-blue-400 cursor-pointer select-none">{link.label}</Text>
					</Link>
				);
			})}
		</div>
	);
};

export default AppFooter;
