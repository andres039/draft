import React from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import {
  AspectRatio,
  Box,
  Center,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const images = [
  "https://ik.imagekit.io/4p3voulmt/Tiny_house/Tiny_house.png?updatedAt=1678631825445",
  "https://ik.imagekit.io/4p3voulmt/Tiny_house/Tiny_House_2.JPG?updatedAt=1678631826506",
  "https://ik.imagekit.io/4p3voulmt/Tiny_house/Tiny_House_3.JPG?updatedAt=1678631830633",
  "https://ik.imagekit.io/4p3voulmt/Tiny_house/Tiny_House_4.JPG?updatedAt=1678631830801",
  "https://ik.imagekit.io/4p3voulmt/Tiny_house/Tiny_House_5.JPG?updatedAt=1678631828854",
];

const Tiny = () => {
  return (
    <Center pt={80}>
      <Stack spacing="md" p="lg">
        <Carousel loop withIndicators w={"95vw"} h={"100vh"}>
          {images.map((image) => (
            <Carousel.Slide m={0} key={image}>
              <AspectRatio ratio={2 / 4} h={"100vh"} m={0}>
                <Image
                  alt="picture of a tiny house"
                  src={image}
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                  blurDataURL="https://ik.imagekit.io/4p3voulmt/structures/10.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678398546604"
                  placeholder="blur"
                />
              </AspectRatio>
            </Carousel.Slide>
          ))}
        </Carousel>
        <Box px={"20%"} py={"xl"}>
          <Title>THOW</Title>
          <Space h="lg" />
          <Text>
            In 2020, I decided to apply to Algonquin for the Architectural
            Technician program and after receiving my acceptance for the January
            2021 intake I began to look at Ottawa accommodations. Quickly
            realizing how expensive and urban all of the options were, my
            partner and I decided to retrofit a travel trailer and live in a
            tiny house community near Nepean. Our trailer was in worse shape
            than we were led to believe and rather than lose our initial
            investment we decided to tear it down and build up on the existing
            frame. Not having any design or technical experience at the time,
            there are some questionable design choices but safety was always our
            main priority. The build took 2 months to design and 8 months to
            complete, we were very lucky to have had the space, tools, and a lot
            of friendly support to finish our house. The house was transported
            from its build site in Niagara Falls to Richmond and then moved to
            Perth last year. We&apos;ve been happily and safely living in our
            tiny house on wheels for almost 2 years now.
          </Text>
        </Box>
      </Stack>
    </Center>
  );
};

export default Tiny;
