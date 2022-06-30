import React from "react";
import {
  Image,
  Paper,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      className={'h-96 w-64 flex flex-col relative justify-between items-start bg-cover bg-center'}
    >
      <div className="z-10">
        <Text className="text-white text-lg font-semibold" size="xs">
          Service
        </Text>
        <Image
          src={service.image}
          alt="Service"
        />
        <Title className="text-white text-2xl font-bold" order={3}>
          {service.name}
        </Title>
      </div>
      <div className="w-full h-full bg-slate-700 opacity-60 absolute inset-0 rounded-lg z-0"></div>
    </Paper>
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
  const { colorScheme } = useMantineColorScheme();

  const isDark = colorScheme === "dark";

  //   const services = [
  //     "DI - 2k, 4k, HDR &  Dolby Vision",
  //     "Rerecording",
  //     "Multi Language Dubbing Service",
  //     "Sound Mix & Mastering - Stereo,  5.1 & 7.1",
  //     "VFX & Animation",
  //     "Edit - FCP, Adobe Premier",
  //   ];

  return (
    <>
      <Image
        radius="lg"
        height={350}
        alt="Post production image"
        src="/images/editing-g4f086fbd5_1920.jpg"
      ></Image>
      <Title
        className={`${isDark ? "text-white" : "text-black"} my-8`}
        order={1}
      >
        Screenfocus Post Production Hub
      </Title>
      <section className="">
        <Title className="text-white text-lg" order={3}>
          Powered by state-of-the-art equipment and technology, Screenfocus post
          production hub conceptualizes and develops pristine sound, color
          grading, and stunning life like visual effects for clients across
          India & Overseas.
        </Title>
        <Text className="text-white text-base mt-6">
          We will take care of the complete post production needs of films of
          any budget. Your one stop destination for a straight from studio to
          theater experience.
        </Text>

        <div className="flex flex-row flex-wrap gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={`KEY_SERVICE_${index + 1}_${service}`}
              service={service}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default PostProduction;
