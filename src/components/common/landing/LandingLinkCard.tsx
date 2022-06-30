import { Image } from "@mantine/core";
import Link from "next/link";
import React, { FunctionComponent } from "react";

type LandingLinkCardProps = {
	link: LandingLink;
};

const LandingLinkCard: FunctionComponent<LandingLinkCardProps> = ({ link }) => {
	console.log("the received value for the landing link", link);
	return (
		<Link target={link.isExternal ? "_blank" : "_self"} href={link.link} passHref>
			<div className="h-auto hover:cursor-pointer hover:w-80 w-36 bg-primary rounded-3xl bg-[url('/images/flmaker-5110278_1920.jpg')]">
				{/* <Image src="" alt="Post Production"></Image> */}

				<div>{link.label}</div>
			</div>
		</Link>
	);
};

export default LandingLinkCard;
