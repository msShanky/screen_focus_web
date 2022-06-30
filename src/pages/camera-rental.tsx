import { Card, Image, Text, Title, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { CurrencyRupee } from "tabler-icons-react";

type Product = {
	name: string;
	image: string;
	price: number;
};

const sampleProduct: Product = {
	name: "Red Helium 8K",
	image: "https://muvimedia.in/wp-content/uploads/2022/02/red-weapon-8k.jpg",
	price: 8000,
};

const ProductCard = (props: { product: Product; isDark: boolean }) => {
	const { image, name, price } = props.product;
	return (
		<Card className={`w-96 h-96 shadow-xl ${props.isDark ? "text-white" : "bg-red-400"}`}>
			<Card.Section>
				<Image src={image} height={280} alt="Camera" />
			</Card.Section>

			<Title className="mt-4 text-white" order={3}>
				{name}
			</Title>
			<div className="flex items-center text-white">
				<CurrencyRupee />
				<Text className="text-lg">{price}</Text>
			</div>
		</Card>
	);
};

const dummyProducts = (): Array<Product> => {
	return Array(30).fill(sampleProduct);
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
					{dummyProducts().map((product, index) => (
						<ProductCard isDark={isDark} key={`PRODUCT_CARD_${index + 1}_${product.name} `} product={product} />
					))}
				</div>
			</section>
		</section>
	);
};

export default CameraRental;
