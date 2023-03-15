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
  "https://ik.imagekit.io/4p3voulmt/siteAnalysis/1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466614506",
  "https://ik.imagekit.io/4p3voulmt/siteAnalysis/2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466613057",
  "https://ik.imagekit.io/4p3voulmt/siteAnalysis/3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466613076",
  "https://ik.imagekit.io/4p3voulmt/siteAnalysis/4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466613893",
  "https://ik.imagekit.io/4p3voulmt/siteAnalysis/5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466613963",
];

const Site = () => {
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
          <Title>Site Analysis:</Title>
          <Space h="lg" />
          <List>
            <List.Item>Semester 4</List.Item>
            <List.Item>Design #2</List.Item>
            <List.Item>Groups of 4</List.Item>
            <List.Item>Assignment #3</List.Item>
          </List>
          <Space h="lg" />
          <Text>
            Our groups were meant to each create one page of the Urban Site
            Analysis in preparation for our Community Centre term projects. I
            was solely responsible for page 2 of this project, I also had a big
            part in the research and creation of page 5. I learned a lot about
            teamwork, research for Urban Analysis, and map creation during this
            assignment.
          </Text>
        </Box>
      </Stack>
    </Center>
  );
};

export default Site;
