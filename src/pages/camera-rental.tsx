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

			<Title className="text-white mt-4" order={3}>
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
		<>
			<Image
				radius="lg"
				height={350}
				alt="Post production image"
				src="/images/jakob-owens-FKyHyNowp-4-unsplash.jpg"
			></Image>
			<Title className={`${isDark ? "text-white" : "text-black"} my-8`} order={1}>
				Screenfocus Camera Rental
			</Title>
			<section className="">
				<Title className={` text-lg ${isDark ? "text-white" : "text-black"}`} order={3}>
					Powered by state-of-the-art equipment and technology, Screenfocus post production hub conceptualizes and
					develops pristine sound, color grading, and stunning life like visual effects for clients across India &
					Overseas.
				</Title>
				<Text className={`text-base mt-6 ${isDark ? "text-white" : "text-black"}`}>
					We will take care of the complete post production needs of films of any budget. Your one stop destination for
					a straight from studio to theater experience.
				</Text>

				<div className="flex flex-wrap items-start gap-8 justify-center mt-16">
					{dummyProducts().map((product, index) => (
						<ProductCard isDark={isDark} key={`PRODUCT_CARD_${index + 1}_${product.name} `} product={product} />
					))}
				</div>
			</section>
		</>
	);
};

export default CameraRental;
