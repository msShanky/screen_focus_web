import React from "react";
import { Image, Text, Title, useMantineColorScheme } from "@mantine/core";

const services: Array<PostProductionService> = [
	{ label: "DI - 2k, 4k, HDR &  Dolby Vision", image: "/images/jose-leon-6rdPada3jk4-unsplash.jpg" },
	{ label: "Re-recording", image: "/images/pexels-brett-sayles-3990842.jpg" },
	{ label: "Multi Language Dubbing Service", image: "/images/pexels-antoni-shkraba-production-8412288.jpg" },
	{ label: "Sound Mix & Mastering - Stereo,  5.1 & 7.1", image: "/images/pexels-dmitry-demidov-3784221.jpg" },
	{ label: "VFX & Animation", image: "/images/pexels-cottonbro-4629627.jpg" },
	{ label: "Edit - FCP, Adobe Premier", image: "/images/matthew-kwong-qJgW5ewKCO8-unsplash.jpg" },
];

const ServiceCard = ({ service }: { service: PostProductionService }) => {
	return (
		<div className="flex flex-row items-start space-x-6">
			<Image radius={"lg"} width={"200px"} height={"252px"} src={service.image} alt={service.label} />
			<Text className="text-3xl font-bold w-60">{service.label}</Text>
		</div>
	);
};

const services: Array<Service> = [
  {
    name: "DI - 2k, 4k, HDR &  Dolby Vision",
    image: "/images/post_production_hub/di_suite.jpeg",
  },
  {
    name: "Rerecording",
    image: "/images/post_production_hub/recording.jpeg",
  },
  {
    name: "Multi Language Dubbing Service",
    image: "/images/post_production_hub/dubbing.jpeg",
  },
  {
    name: "Sound Mix & Mastering - Stereo",
    image: "/images/post_production_hub/mix_mastering.jpeg",
  },
  {
    name: "VFX & Animation",
    image: "/images/post_production_hub/vfx_&_animation.jpeg",
  },
  {
    name: "Edit - FCP, Adobe Premier",
    image: "/images/post_production_hub/edit_suite.jpeg",
  },
];

const PostProduction = () => {
	return (
		<section className="container mx-auto mt-12">
			<div className="flex flex-row justify-between space-x-4 bg-gradient-to-b from-secondary to-primary bg-[length:100%_210px] bg-no-repeat bg-bottom rounded-lg">
				{/* <div className="absolute bottom-0 w-full h-52 bg"></div> */}
				<div className="flex flex-col w-6/12 h-auto space-y-8">
					<Title className="text=dark font-bold text-5xl">Screenfocus Post Production Hub</Title>
					<Text className="text-xl">
						Powered by state-of-the-art equipment and technology, ScreenFocus post production hub conceptualizes and
						develops pristine sound, color grading, and stunning life like visual effects for clients across India &amp;
						Overseas.
					</Text>
					<Text className="text-xl">
						We will take care of the complete post production needs of films of any budget. Your one stop destination
						for a straight from studio to theater experience.
					</Text>
				</div>
				<div className="w-5/12">
					<Image
						radius={"md"}
						width={884}
						height={598}
						alt="Post production image"
						src="/images/pexels-cinedirektor-films-3928528.png"
					></Image>
				</div>
			</div>

			<section className="flex flex-col items-center mt-12">
				<div>
					<Title className="text-5xl text-dark" order={3}>
						Services
					</Title>
					<div className="w-48 h-2 mt-4 translate-x-10 bg-secondary rounded-3xl"></div>
				</div>
				<div className="flex flex-wrap w-full gap-8 mt-12">
					{services.map((service, index) => (
						<ServiceCard key={`KEY_SERVICE_${index + 1}_${service}`} service={service} />
					))}
				</div>
			</section>
		</section>
	);
};

export default PostProduction;
