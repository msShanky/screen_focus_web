import React from "react";
import { UnstyledButton, Image, useMantineColorScheme, Group, Text, Center } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";
import { upperFirst } from "@mantine/hooks";
import Link from "next/link";

const AppHeader = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	const Icon = dark ? Sun : MoonStars;

	return (
		<header className="flex flex-row justify-between p-4">
			<Link href="/" passHref>
				<div className="w-20 h-20 rounded-full bg-red-100 flex justify-center items-center">
					<Image width={50} alt="screen focus logo" src="/logo.svg"></Image>
				</div>
			</Link>
			<Group position="center" my="xl">
				<UnstyledButton
					className={`flex items-center justify-between rounded-full pl-4 w-40 h-10 ${
						dark ? "bg-slate-700" : "bg-slate-200"
					}`}
					aria-label="Toggle theme"
					onClick={() => toggleColorScheme()}
					title="Ctrl + J"
				>
					<Text className={`leading-3 ${dark ? "text-white" : "text-black"}`} size="sm">
						{upperFirst(colorScheme === "light" ? "dark" : "light")} theme
					</Text>
					<Center className={`h-10 w-10 rounded-[28px] text-black  ${dark ? "bg-yellow-300 " : "bg-blue-300"}`}>
						<Icon size={18} />
					</Center>
				</UnstyledButton>
			</Group>
		</header>
	);
};

export default AppHeader;
