import { Card, Image, Text, Title, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { products } from "../helpers/camera";

const ProductCard = (props: { product: Product; isDark: boolean }) => {
	const { image, name } = props.product;
	return (
		<Card className={`w-96 h-96 shadow-xl text-dark `}>
			<Card.Section className="flex justify-center w-full p-4">
				<Image fit="contain" src={image} className="w-full" height={280} alt="Camera" />
			</Card.Section>

			<Title className="mt-4 text-center text-dark" order={3}>
				{name}
			</Title>
		</Card>
	);
};

const CameraRental = () => {
	const { colorScheme } = useMantineColorScheme();

	const isDark = colorScheme === "dark";

	return (
		<section className="container mx-auto mt-12">
			<Title className="text-5xl text-center text-dark" order={1}>
				Powerful Gears For Rent
			</Title>
			<Text className="mt-8 text-2xl text-center text-dark">
				Powered by state-of-the-art equipment and technology, Screenfocus post production hub conceptualizes and
				develops pristine sound, color grading, and stunning life like visual effects for clients across India &amp;
				Overseas.
			</Text>
			<section className="p-8 mt-12 bg-white shadow-xl shadow-primary/20 rounded-2xl ">
				<div className="flex flex-wrap items-start justify-center gap-8 mt-16">
					{products.map((product, index) => (
						<ProductCard isDark={isDark} key={`PRODUCT_CARD_${index + 1}_${product.name} `} product={product} />
					))}
				</div>
			</section>
		</section>
	);
};

export default CameraRental;
