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
  "https://ik.imagekit.io/4p3voulmt/renovations/1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466708459",
  "https://ik.imagekit.io/4p3voulmt/renovations/2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466717192",
  "https://ik.imagekit.io/4p3voulmt/renovations/3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466709165",
  "https://ik.imagekit.io/4p3voulmt/renovations/4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466728504",
  "https://ik.imagekit.io/4p3voulmt/renovations/5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466731122",
  "https://ik.imagekit.io/4p3voulmt/renovations/6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466733705",
  "https://ik.imagekit.io/4p3voulmt/renovations/7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466709212",
  "https://ik.imagekit.io/4p3voulmt/renovations/8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466721218",
  "https://ik.imagekit.io/4p3voulmt/renovations/9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466715057",
  "https://ik.imagekit.io/4p3voulmt/renovations/10.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466731446",
  "https://ik.imagekit.io/4p3voulmt/renovations/11.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466719792",
  "https://ik.imagekit.io/4p3voulmt/renovations/12.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466733096",
  "https://ik.imagekit.io/4p3voulmt/renovations/13.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466708517",
  "https://ik.imagekit.io/4p3voulmt/renovations/14.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466732955",
  "https://ik.imagekit.io/4p3voulmt/renovations/15.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466716194",
];

const Renovations = () => {
  return (
    <>
      <Center pt={80} m={0} px={0}>
        <Stack spacing="md" maw={"90vw"}>
          <Carousel loop withIndicators w={"90vw"} h={"100vh"} m={0}>
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
            <Title>Renovations</Title>
            <Space h="md" />
            <List>
              <List.Item>Semester 3</List.Item>
              <List.Item>Working Drawings #3</List.Item>
              <List.Item>Independent Work</List.Item>
              <List.Item>Term Project</List.Item>
            </List>
            <Space h="lg" />
            <Text>
              Using knowledge gained during our 3 semesters and brief student
              requested consultations with the Professor, we had to create and
              compile a set of architectural drawings for a Part 9 renovation.
              The drawing set was equally challenging and interesting. Learning
              how to use the OBC to find critical information on designing all
              aspects of the renovation was empowering.
            </Text>
          </Box>
        </Stack>
      </Center>
    </>
  );
};

export default Renovations;
