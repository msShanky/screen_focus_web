import React from "react";
import { Blockquote, Divider, Image, Text, Title, useMantineColorScheme } from "@mantine/core";

const Production = () => {
	const { colorScheme } = useMantineColorScheme();

	const isDark = colorScheme === "dark";

	return (
		<section className="container mx-auto mt-12">
			<section className="flex flex-row justify-between">
				<div className="w-6/12">
					<Title className="my-8 text-5xl text-dark" order={1}>
						Screenfocus Production
					</Title>
					<Title className="text-3xl font-bold text-primary" order={2}>
						About:
					</Title>
					<Text className="mt-6 text-3xl text-dark">Disrupt The Tamil Film-Making Landscape</Text>
					<Text className="mt-6 text-xl">
						Screenfocus Productions was founded by film Maker, R.G. Thangaraj with the goal of creating compelling
						content for film lovers on both at domestic as well as global scale. We started as a simple post production
						company and now grown as a film production house.
					</Text>
					<Text className="mt-6 text-xl">
						At Screenfocus, we strive to set benchmarks in the way films are created, marketed, and consumed. We are
						especially cognizant of the need for on-demand content via. digital platforms and have strategically
						leveraged streaming services for film and music distribution. Today, Screenfocus Productions has become one
						of the most sought-after production houses in the country having worked with numerous industry stalwarts
					</Text>
				</div>
				<Image width={"680px"} height={"680px"} src="/images/post_production_circle.svg" alt="Post production"></Image>
			</section>
			<section className="mt-8">
				<div>
					<Title className="text-5xl text-dark" order={3}>
						Our Vision:
					</Title>
					<div className="w-48 h-2 mt-4 translate-x-10 bg-secondary rounded-3xl"></div>
				</div>
				<div className="flex flex-row items-center justify-center h-auto mt-24 space-x-8">
					<Image
						width={200}
						height={252}
						radius="lg"
						alt="Thangaraj"
						src="/images/pexels-craig-mckay-842980.jpg"
					></Image>
					<div className="w-1 h-32 bg-secondary"></div>
					<Blockquote className="w-7/12" cite="&#45; R.G.THANGARAJ">
						My vision is to use cinema as a force for change and promote Tamil culture across the globe. At Screenfocus
						Production , we strive to produce entertaining and compelling content shaped to cater to a global audience,
						while adhering to our cultural roots.
					</Blockquote>
				</div>
			</section>
		</section>
	);
};

export default Production;
