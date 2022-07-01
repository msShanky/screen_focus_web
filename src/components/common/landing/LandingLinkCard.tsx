import { Image, Text } from "@mantine/core";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";

type LandingLinkCardProps = {
	link: LandingLink;
};

const containerVariant = {
	default: {
		width: 133,
	},
	hover: {
		width: 350,
	},
};

// left: -50, bottom: 150

const iconVariants = {
	default: { rotate: 270, x: -10, bottom: 144, left: -48 },
	hover: { rotate: 360, x: 30, bottom: 25, left: -10 },
};

const LandingLinkCard: FunctionComponent<LandingLinkCardProps> = ({ link }) => {
	const { background, label, link: hrefLink, isExternal } = link;

	return (
		<Link target={isExternal ? "_blank" : "_self"} href={hrefLink} passHref>
			<motion.div
				variants={containerVariant}
				initial="default"
				whileHover="hover"
				animate="default"
				className="relative rounded-lg shadow-xl hover:cursor-pointer bg-primary"
			>
				<Image radius={"md"} height={450} src={background} alt="Post Production" />
				<div className="w-9/12 bottom-10 h-16 bg-gradient-to-br from-primary to-[#5F55E4] absolute"></div>
				<motion.div variants={iconVariants} className="absolute flex items-start h-16 w-60 bottom-36 -left-12">
					<Text className="text-xl text-white">{label}</Text>
				</motion.div>
			</motion.div>
		</Link>
	);
};

export default LandingLinkCard;
