import { Image, List, Text, Title, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { InteriorServiceCard } from "../components/InteriorServiceCard";

const Interiors = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      <Image
        radius="lg"
        height={350}
        alt="Post production image"
        src="/images/alexander-lemann-qc-kiqPzoy8-unsplash.jpg"
      ></Image>
      <Title className={`my-8`} order={1}>
        Screenfocus home theater & studio interiors
      </Title>
      <section className="prose-xl">
        <Title order={2}>About:</Title>
        <Text className="text-2xl mt-6">
          WE OFFER BETTER INSIGHTS TO YOUR LIFE WITH OUR CREATIVE HOME THEATER &
          STUDIO SOLUTIONS
        </Text>
        <Text className="text-base mt-6">
          Screenfocus, one of the top home theater companies in Chennai, is a
          precipitate of two Instrumentation Engineers having experience in
          various fields of theater & studios for more than 15 years. We have a
          team of creative, young, pro-active and talented Engineers, geared to
          offer comprehensive, extremely smart and fully customized solutions.
          We strive to get into your own world of imagination and thought
          process to deliver more than what a dream house or work space would
          look like. Keeping ourselves abreast with the latest technologies,
          which enables us to offer indubitable and impeccable solutions that
          transforms your home or your work space to a smart one. Furthermore,
          no matter in which corner of the world you are in, your home or your
          work space will remain safe, secured..!! Our systems transform your
          normal life style into a smart one. A Transformation that enhances
          your life, a transformation that provides added luxury.
        </Text>
        <Text className="text-base mt-6">
          At Screenfocus, we strive to set benchmarks in the way films are
          created, marketed, and consumed. We are especially cognizant of the
          need for on-demand content via. digital platforms and have
          strategically leveraged streaming services for film and music
          distribution. Today, Screenfocus Productions has become one of the
          most sought-after production houses in the country having worked with
          numerous industry stalwarts
        </Text>
      </section>
      <section className="mt-8 prose-xl">
        <Title className="text-lg" order={2}>
          Our Services:
        </Title>
        <Text className="text-2xl mt-6">CAPTIVATE ALL OF YOUR SENSES</Text>
        <Text className="text-base mt-6">
          The magic of a truly riveting home theatre is a combination of sight
          and sound so realistic that you feel embodied in the film. Added to a
          massive screen and projector, Control4 and Triad Audio solutions make
          your home theatre experience far superior than going out to see a
          movie. With one touch, fire up your Dolby Atmos system, queue the
          surround sound, drop the screen and dim the lights. All you&#39;ll
          need is the popcorn. When we provide an audio-video solution, we know
          <List className="list-disc">
            <List.Item>The size of the room</List.Item>
            <List.Item>The placement of windows</List.Item>
            <List.Item>The luminance level</List.Item>
            <List.Item>The movies you love</List.Item>
            <List.Item>The music you prefer</List.Item>
            <List.Item>
              Who else gets to access the system like young kids
            </List.Item>
          </List>
        </Text>
      </section>
      <section className="mt-8 prose-xl">
        <Text className="text-2xl mt-6">
          Each element is thought over carefully to ensure that you get
          precisely the best experience you want, be it a casual family home
          theatre or a professional screening room
        </Text>
        <InteriorServiceCard
          service={{
            description: `At Screenfocus, we know the trick to great home theatres. It is the acoustics of a room. Fantastic sounding home theatres come not just from superior speakers or the quality of the audio content, they are birthed from the acoustics of a room.
Our engineers make sure that you understand the importance of Acoustics and Sound Treatment along with the product you pick.
No more dead theatre rooms. When our sound engineers install the system, the right set of products are used to make the room lively, dynamic and cut down all extraneous noises. We give you a theatre that offers crystal clear sound.
Accurate, efficient, eco-friendly, affordable and professional design are just some of the benefits you get with Delfin home theatre acoustic space installations`,
            title: "Acoustics",
			imageKey:"acoustics"
          }}
        />
        <InteriorServiceCard
          service={{
            description: `Technical know-how is mandatory for home theatre or projector installation. At Screenfocus, we guarantee that our knowledge is always up to date with technology. We aid you in choosing the right projector for your needs and installing them correctly.
						A single factor unheeded and installing a projector can go awry. Delfin comprehends this completely. We pay minute attention to every element of the system for proper installation, ranging from placement of the speakers to the location of the projector.`,
            title: "Projector Installation",
            imageKey: "projector_installation",
          }}
        />
        <InteriorServiceCard
          service={{
            description: `The latest in audio-video solution is outdoor speakers that can create an oasis of beautiful sound. They make for a perfect addition to any outdoor space. Use them for a backyard party or for some R&R in your patio. At screenfocus, we can install outdoor speakers that are connected to the ones inside a home. A unified speaker system that blasts the same song in every corner of the house that's what Delfin provides. We offer you the freedom to enjoy your entertainment system to the last inch.
						We even keep your neighbours in mind while installing the system. Therefore, our engineers give you complete control over the volume of the speakers. An integrated control system is added to the speakers so that regulating the volume is as simple as a touch of a button. So, what are you waiting for? Get your entertainment system on and start partying. Contact us today to know more about the options we offer when it comes to in-wall speaker systems.`,
            title: "Outdoor Audio Installation",
			imageKey:'outdoor'
          }}
        />
        <InteriorServiceCard
          service={{
            description: `Screenfocus is the best home theatre system company in Chennai that provides exceptional custom solutions.Our installations of home theatres utilise state of the art speakers and surround sound systems.We follow the protocols and design standards proposed by THX or similar certification body.`,
            title: "Home Audio & Video Installation",
			imageKey:'home_video_&_audio'
          }}
        />
      </section>
      <section className="mt-8 prose-xl">
        <Text className="text-2xl mt-6">
          For an out-of-body experience that encompasses the whole house, we
          cater to:
        </Text>
        <List className="list-disc">
          <List.Item>Entire home audio installation</List.Item>
          <List.Item>
            Multi-channel surround sound setup referred to Dolby standards
          </List.Item>
          <List.Item>Dolby Atmos setups</List.Item>
          <List.Item>Best in class Stereo setups, Soundbars</List.Item>
          <List.Item>Wireless speaker setups</List.Item>
          <List.Item>Aesthetics are our forte</List.Item>
        </List>

        <Text className="text-xl font-extralight mt-6">
          When we are done with the installation, not a single naked wire or
          cable will be visible. We tuck away every little cord to bring beauty
          to your home
        </Text>
      </section>
    </>
  );
};

export default Interiors;
