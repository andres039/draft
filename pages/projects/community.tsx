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
  "https://ik.imagekit.io/4p3voulmt/community/1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466867095",
  "https://ik.imagekit.io/4p3voulmt/community/3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466867865",
  "https://ik.imagekit.io/4p3voulmt/community/2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466865706",
];

const Community = () => {
  return (
    <Center pt={80}>
      <Stack spacing="md" p="lg">
        <Carousel loop withIndicators h={"100vh"}>
          {images.map((image) => (
            <Carousel.Slide m={0} key={image}>
              <AspectRatio ratio={8 / 4} m={0} h={"100vh"}>
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
          <Title>Community Centre</Title>
          <Space h="lg" />
          <List>
            <List.Item>Semester 4</List.Item>
            <List.Item>Design #2</List.Item>
            <List.Item>Independent Work</List.Item>
            <List.Item> Term Project</List.Item>
          </List>
          <Space h="lg" />
          <Text>
            Using the Group work Site Analysis project, I was instructed to
            design a 600m² community centre. Inspired by the site analysis
            findings, I researched an Eastern philosophy that strives to bring
            natural elements in contact with humankind and achieve a balance of
            unity. I had a lot of fun designing this community centre, I was
            incredibly motivated to create a space that was practical and
            considerate. I loved coming up with solutions to minor conflicts
            between the assignment brief, my design ideas, and site
            restrictions. I feel very proud of the final project and what I was
            able to achieve with this design.
          </Text>
        </Box>
      </Stack>
    </Center>
  );
};

export default Community;
