import { Image, Tabs, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import { InteriorServiceCard } from "../components/InteriorServiceCard";

const Interiors = () => {
	const [activeTab, setActiveTab] = useState(0);
	const onChange = (active: number, tabKey: string) => {
		setActiveTab(active);
	};

	return (
		<main className="container flex flex-col items-center justify-center mx-auto">
			<div className="absolute inset-0 bg-gradient-to-b from-secondary to-primary bg-[length:100%_100%] h-[614px] bg-no-repeat bg-top z-0"></div>
			<div className="z-10 flex flex-col items-center mt-8">
				<Title className="text-5xl font-bold text-white">Screenfocus Home Theater &amp; Studio Interiors</Title>
				<Text className="w-10/12 mt-10 text-3xl font-light text-center text-white">
					We offer insights to your life with our creative home theater &amp; studio solutions
				</Text>
			</div>
			<section className="container z-10 flex flex-row justify-center mt-24 space-x-10">
				<Image
					radius="lg"
					width={398}
					height={613}
					alt="Post production image"
					src="/images/pexels-yan-krukov-9069365.jpg"
				/>
				<Image
					radius="lg"
					width={398}
					height={613}
					alt="Post production image"
					src="/images/blvck-paris-ckBxIZmpXJE-unsplash.jpg"
				/>
				<Image
					radius="lg"
					width={398}
					height={613}
					alt="Post production image"
					src="/images/pexels-roberto-nickson-3131971.jpg"
				/>
			</section>
			<section className="container mx-auto mt-12 space-y-10">
				<Text className="text-xl text-dark">
					Screenfocus, one of the top home theater companies in Chennai, is a precipitate of two Instrumentation
					Engineers having experience in various fields of theater &amp; studios for more than 15 years. We have a team
					of creative, young, pro-active and talented Engineers, geared to offer comprehensive, extremely smart and
					fully customized solutions. We strive to get into your own world of imagination and thought process to deliver
					more than what a dream house or work space would look like. Keeping ourselves abreast with the latest
					technologies, which enables us to offer indubitable and impeccable solutions that transforms your home or your
					work space to a smart one. Furthermore, no matter in which corner of the world you are in, your home or your
					work space will remain safe, secured..!! Our systems transform your normal life style into a smart one. A
					Transformation that enhances your life, a transformation that provides added luxury.
				</Text>
				<Text className="text-xl text-dark">
					At Screenfocus, we strive to set benchmarks in the way films are created, marketed, and consumed. We are
					especially cognizant of the need for on-demand content via. digital platforms and have strategically leveraged
					streaming services for film and music distribution. Today, Screenfocus Productions has become one of the most
					sought-after production houses in the country having worked with numerous industry stalwarts
				</Text>
			</section>
			<section className="container flex flex-col items-center mx-auto mt-12 space-y-10">
				<div>
					<Title className="text-5xl text-dark" order={3}>
						Services
					</Title>
					<div className="w-48 h-2 mt-4 translate-x-10 bg-secondary rounded-3xl"></div>
				</div>
				<div className="w-full">
					<Tabs
						classNames={{
							root: "",
							tabControl: "",
							tabActive: "text-secondary border-b-secondary border-b-2",
							tabsList: "space-x-20",
							tabsListWrapper: "border-none",
							tabLabel: "text-xl text-dark",
							tabInner: "text-red-300",
						}}
						color="primary"
						active={activeTab}
						onTabChange={onChange}
					>
						<Tabs.Tab label="Acoustics" tabKey="0">
							<InteriorServiceCard activeKey={activeTab} />
						</Tabs.Tab>
						<Tabs.Tab label="Projector Installation" tabKey="1">
							<InteriorServiceCard activeKey={activeTab} />
						</Tabs.Tab>
						<Tabs.Tab label="Outdoor Audio Installation" tabKey="2">
							<InteriorServiceCard activeKey={activeTab} />
						</Tabs.Tab>
						<Tabs.Tab label="Home Audio &amp; Video Installation" tabKey="3">
							<InteriorServiceCard activeKey={activeTab} />
						</Tabs.Tab>
					</Tabs>
				</div>
			</section>
		</main>
	);
};

export default Interiors;
