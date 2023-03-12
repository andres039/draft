import React from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { AspectRatio, Center, List, Stack, Text } from "@mantine/core";

const images = [
  "https://ik.imagekit.io/4p3voulmt/retreatHouse/1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466659736",
  "https://ik.imagekit.io/4p3voulmt/retreatHouse/2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466663139",
  "https://ik.imagekit.io/4p3voulmt/retreatHouse/3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466660362",
  "https://ik.imagekit.io/4p3voulmt/retreatHouse/4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466661613",
];

const Retreat = () => {
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

          {/* <Carousel.Slide m={0}>
            <AspectRatio ratio={7 / 4} mah={"70vh"} m={0}>
              <Image alt="picture of a tiny house" src={tinyHousePic} />
            </AspectRatio>
          </Carousel.Slide>
          <Carousel.Slide m={0}>
            <AspectRatio ratio={7 / 4} mah={"70vh"} m={0}>
              <Image alt="picture of a tiny house" src={tinyHouseInside} />
            </AspectRatio>
          </Carousel.Slide> */}
        </Carousel>
        <List>
          <List.Item>Semester 3 </List.Item>
          <List.Item>Design Course #1 </List.Item>
          <List.Item>Independent Work Term Project</List.Item>
        </List>
        <Text>
          Throughout my semesters, it became clear that I prioritize practical
          design. In this project I found myself inspired by the river views and
          the possibility of solar gains. This project also gave me the
          opportunity to explore Revit and to learn how to create interesting
          shapes with the software. The design concepts implemented were
          carefully considered while taking the &apos;client&apos;s&apos; requirements
          seriously.
        </Text>
      </Stack>
    </Center>
  );
};

export default Retreat;
