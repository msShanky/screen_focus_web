import React from "react";
import Link from "next/link";
import { Image, Text } from "@mantine/core";

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
		<div className="container flex flex-row justify-between px-4 mx-auto">
			<div className="flex flex-row">
				<Image width={57} height={57} src="/images/icons/Mobile.png" alt="Phone" />
				<Text className="mt-4 text-xl font-bold text-dark">+91 89395 93999</Text>
			</div>
			<div className="flex flex-row justify-center mb-20 space-x-4">
				{footerLinks.map((link) => {
					const key = link.label;
					return (
						<Link key={key} href={link.link} passHref>
							<Text className="text-xl cursor-pointer select-none hover:text-primary text-dark">{link.label}</Text>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default AppFooter;
