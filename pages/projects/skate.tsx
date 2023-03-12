import React from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import {
  AspectRatio,
  Box,
  Center,
  List,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const images = [
  "https://ik.imagekit.io/4p3voulmt/skateCoop/1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466567586",
  "https://ik.imagekit.io/4p3voulmt/skateCoop/2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466564235",
];

const Skate = () => {
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
                  blurDataURL="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  placeholder="blur"
                  priority
                  style={{ objectFit: "contain" }}
                />
              </AspectRatio>
            </Carousel.Slide>
          ))}
        </Carousel>
        <Box px={"20%"} py={"xl"}>
          <Title>Warming Hut</Title>
          <Space h="md" />
          <List>
            <List.Item>Semester 3</List.Item>
            <List.Item>Design Course #1</List.Item>
            <List.Item>Groups of 3</List.Item>
            <List.Item>Assignment #2</List.Item>
          </List>
          <Space h="lg" />
          <Text>
            We were tasked to come up with a design based on certain criteria
            including ease of assembly and innovative shape. Our group chose my
            design, which also took local and sustainable materials into
            account. This assignment was meant to be a submission for the annual
            Forks competition in Winnipeg.
          </Text>
        </Box>
      </Stack>
    </Center>
  );
};

export default Skate;
