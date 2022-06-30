import React from "react";
import { Image, Text, Title } from "@mantine/core";

import Link from "next/link";

const pageLinks = [
	{
		link: "/post-production",
		text: "Post Production Hub",
	},
	{
		link: "/camera-rental",
		text: "Camera Rental",
	},
	{
		link: "/production",
		text: "Production",
	},
	{
		link: "/interiors",
		text: "Home Theater",
	},
	{
		link: "http://premiumfreshfoods.com/sicf-1/",
		text: "Film Festival",
	},
];

const AppHeader = () => {
	return (
		<header className="container flex flex-row items-center justify-between p-4 mx-auto">
			<div className="flex flex-row items-center space-x-4">
				<Link href="/" passHref>
					<div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary">
						<Image width={50} alt="screen focus logo" src="/logo.svg"></Image>
					</div>
				</Link>
				<Title className="font-sans text-2xl text-dark">Screen Focus</Title>
			</div>
			<div className="flex flex-row space-x-4">
				{pageLinks.map(({ link, text }) => {
					const uniqueKey = `${link}-${text}-LinkText`;
					return (
						<Link key={uniqueKey} href={link} passHref>
							<Text className="font-sans text-lg hover:text-primary text-dark" component="a">{text}</Text>
						</Link>
					);
				})}
			</div>
		</header>
	);
};

export default AppHeader;
