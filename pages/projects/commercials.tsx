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
  "https://ik.imagekit.io/4p3voulmt/structures/1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678398533236",
  "https://ik.imagekit.io/4p3voulmt/structures/2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678398546347",
  "https://ik.imagekit.io/4p3voulmt/structures/3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678398544681",
  "https://ik.imagekit.io/4p3voulmt/structures/4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678398541267",
  "https://ik.imagekit.io/4p3voulmt/structures/5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678398538209",
  "https://ik.imagekit.io/4p3voulmt/structures/6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678398545284",
  "https://ik.imagekit.io/4p3voulmt/structures/7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678398544725",
  "https://ik.imagekit.io/4p3voulmt/structures/8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678398548021",
  "https://ik.imagekit.io/4p3voulmt/structures/9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678398547884",
  "https://ik.imagekit.io/4p3voulmt/structures/10.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678398546604",
];

const project = () => {
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
          <Title>Commercial</Title>
          <Space h="lg" />
          <List>
            <List.Item> Semester 4</List.Item>
            <List.Item>Working Drawings #4</List.Item>
            <List.Item>Independent Work </List.Item>
            <List.Item>Term Project</List.Item>
          </List>
          <Space h="lg" />
          <Text>
            Using knowledge gained during our 4 semesters and brief student
            requested consultations with the Professor, we had to create and
            compile a set of architectural drawings for a Part 3 new build.
            Working on such a large building gave me a feeling of responsibility
            to ensure all aspects of the build were safe and to code. These
            drawings stimulated my creativity and ingenuity.
          </Text>
        </Box>
      </Stack>
    </Center>
  );
};

export default project;
