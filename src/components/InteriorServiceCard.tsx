import { Image, Text } from "@mantine/core";
import React from "react";

type Service = {
	image: string;
	description: string;
};

const serviceCopy: Record<number, Service> = {
	0: {
		image: "/images/wu-yi-jtdUVpRPyd8-unsplash.jpg",
		description: `At Screenfocus, we know the trick to great home theatres. It is the acoustics of a room. 
		Fantastic sounding home theatres come not just from superior speakers or the quality of the audio content, they are birthed from
		the acoustics of a room. Our engineers make sure that you understand the importance of Acoustics and Sound
		Treatment along with the product you pick. No more dead theatre rooms. When our sound engineers install the
		system, the right set of products are used to make the room lively, dynamic and cut down all extraneous
		noises. We give you a theatre that offers crystal clear sound. Accurate, efficient, eco-friendly, affordable
		and professional design are just some of the benefits you get with Delfin home theatre acoustic space
		installations`,
	},
	1: {
		image: "/images/alex-litvin-MAYsdoYpGuk-unsplash.jpg",
		description: `Technical know-how is mandatory for home theatre or projector installation. At Screenfocus, we guarantee that our knowledge is always up to date with technology. We aid you in choosing the right projector for your needs and installing them correctly. A single factor unheeded and installing a projector can go awry. Delfine comprehends this completely. We pay minute attention to every element of the system for proper installation, ranging from placement of the speakers to the location of the projector.`,
	},
	2: {
		image: "/images/pexels-picsbyphoenix-2303839.jpg",
		description: `The latest in audio-video solution is outdoor speakers that can create an oasis of beautiful sound. They make for a perfect addition to any outdoor space. Use them for a backyard party or for some R&R in your patio. At screenfocus, we can install outdoor speakers that are connected to the ones inside a home. A unified speaker system that blasts the same song in every corner of the house that's what Delfin provides. We offer you the freedom to enjoy your entertainment system to the last inch. We even keep your neighbours in mind while installing the system. Therefore, our engineers give you complete control over the volume of the speakers. An integrated control system is added to the speakers so that regulating the volume is as simple as a touch of a button. So, what are you waiting for? Get your entertainment system on and start partying. Contact us today to know more about the options we offer when it comes to in-wall speaker systems.`,
	},
	3: {
		image: "/images/pexels-picsbyphoenix-2303839.jpg",
		description:
			"Screenfocus is the best home theatre system company in Chennai that provides exceptional custom solutions. Our installations of home theatres utilise state of the art speakers and surround sound systems. We follow the protocols and design standards proposed by THX or similar certification body.",
	},
};

type InteriorServiceCardProps = {
	activeKey: number;
};

export const InteriorServiceCard = (props: InteriorServiceCardProps) => {
	const { activeKey } = props;
	const { description, image } = serviceCopy[activeKey];

	return (
		<div className="flex flex-row items-center justify-center w-full mt-8 space-x-20 rounded-3xl bg-gradient-to-l from-primary/20 to-white backdrop-opacity-20 h-96">
			<div className="rounded-3xl bg-gradient-to-b from-[#968EFF] to-[#D5D2FF] w-[258px] h-[302px] p-8">
				<Image
					classNames={{ root: "w-full h-full" }}
					width={187}
					height={218}
					radius="lg"
					src={image}
					alt="Acoustics"
				/>
			</div>
			<div className="relative z-10 w-7/12 ml-4">
				<Text className="pb-6 text-xl ">{description}</Text>
			</div>
		</div>
	);
};
