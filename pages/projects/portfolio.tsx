import React from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { AspectRatio, Center, Stack, Text } from "@mantine/core";

const images = [
  "https://ik.imagekit.io/4p3voulmt/Portfolio/1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466795863",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466804531",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466804691",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466807686",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466810626",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466812287",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466807120",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466804658",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466806967",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/10.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466813666",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/11.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466803823",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/12.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466811681",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/13.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466805267",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/14.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466812096",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/15.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466803475",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/16.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466812216",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/17.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466806373",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/18.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466812870",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/19.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466805575",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/20.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466802752",
  "https://ik.imagekit.io/4p3voulmt/Portfolio/21.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678466802453",
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
        <Text>
        My portfolio is a collection of my best personal works from my 4 school semesters.
        </Text>
      </Stack>
    </Center>
  );
};

export default Portfolio;
