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
  "https://ik.imagekit.io/4p3voulmt/Portfolio/1.jpg?updatedAt=1678636203437",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/2.jpg?updatedAt=1678636207812",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/3.jpg?updatedAt=1678636209562",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/4.jpg?updatedAt=1678636214408",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/5.jpg?updatedAt=1678636216522",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/6.jpg?updatedAt=1678636220858",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/7.jpg?updatedAt=1678636212011",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/8.jpg?updatedAt=1678636209711",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/9.jpg?updatedAt=1678636210854",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/10.jpg?updatedAt=1678636220706",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/11.jpg?updatedAt=1678636208876",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/12.jpg?updatedAt=1678636218845",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/13.jpg?updatedAt=1678636210388",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/14.jpg?updatedAt=1678636221441",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/15.jpg?updatedAt=1678636207109",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/16.jpg?updatedAt=1678636221002",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/17.jpg?updatedAt=1678636209350",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/18.jpg?updatedAt=1678636221052",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/19.jpg?updatedAt=1678636210186",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/20.jpg?updatedAt=1678636207165",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/21.jpg?updatedAt=1678636209120",
];

const Portfolio = () => {
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
                  style={{ objectFit: "contain" }}
                  blurDataURL="https://ik.imagekit.io/4p3voulmt/structures/10.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678398546604"
                  placeholder="blur"
                  priority
                />
              </AspectRatio>
            </Carousel.Slide>
          ))}
        </Carousel>
        <Box px={"20%"} py={"xl"}>
          <Title>Portfolio</Title>
          <Space h="md" />
          <Text>
            My portfolio is a collection of my best personal works from my 4
            school semesters.
          </Text>
        </Box>
      </Stack>
    </Center>
  );
};

export default Portfolio;
