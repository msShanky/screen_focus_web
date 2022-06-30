import { Image, Text } from "@mantine/core";
import React from "react";

export type InteriorService = {
  title: string;
  description: string;
  imageKey: string;
};

export const InteriorServiceCard = (props: { service: InteriorService }) => {
  const { title, description, imageKey } = props.service;
  return (
    <div className="relative p-2 mt-8">
      <div className="absolute h-auto w-1/6 top-0 bottom-0 left-0 bg-yellow-400 opacity-40 rounded-lg" />
      <Image
        width={300}
        src={`/images/home_theater/${imageKey}.jpeg`}
        alt="acoustics"
      />
      <div className="relative z-10 ml-4">
        <Text weight={700} mb="xs" mt={5} className="text-2xl">
          {title}
        </Text>
        <Text className="text-xl pb-6">{description}</Text>
      </div>
    </div>
  );
};
