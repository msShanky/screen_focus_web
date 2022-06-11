import React from "react";
import { Blockquote, Image, Text, Title, useMantineColorScheme } from "@mantine/core";

const Production = () => {
	const { colorScheme } = useMantineColorScheme();

	const isDark = colorScheme === "dark";

	return (
		<>
			<Image radius="lg" height={350} alt="Post production image" src="/images/editing-g4f086fbd5_1920.jpg"></Image>
			<Title className={`${isDark ? "" : "text-black"} my-8`} order={1}>
				Screenfocus Post Production Hub
			</Title>
			<section className="">
				<Title className="" order={2}>
					About:
				</Title>
				<Text className="text-2xl mt-6">Disrupt The Tamil Film-Making Landscape</Text>
				<Text className="text-base mt-6">
					Screenfocus Productions was founded by film Maker, R.G. Thangaraj with the goal of creating compelling content
					for film lovers on both at domestic as well as global scale. We started as a simple post production company
					and now grown as a film production house.
				</Text>
				<Text className="text-base mt-6">
					At Screenfocus, we strive to set benchmarks in the way films are created, marketed, and consumed. We are
					especially cognizant of the need for on-demand content via. digital platforms and have strategically leveraged
					streaming services for film and music distribution. Today, Screenfocus Productions has become one of the most
					sought-after production houses in the country having worked with numerous industry stalwarts
				</Text>
			</section>
			<section className="mt-8">
				<Title className="text-lg" order={3}>
					Our Vision:
				</Title>

				<Blockquote cite="&#45; R.G.THANGARAJ">
					My vision is to use cinema as a force for change and promote Tamil culture across the globe. At Screenfocus
					Production , we strive to produce entertaining and compelling content shaped to cater to a global audience,
					while adhering to our cultural roots.
				</Blockquote>
			</section>
		</>
	);
};

export default Production;
