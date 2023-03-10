import React from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { AspectRatio, Center, Stack, Text } from "@mantine/core";

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
                <Image alt="picture of a tiny house" src={image} fill priority
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
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fugit
          laboriosam ad debitis libero neque, fugiat asperiores repellendus,
          exercitationem sequi suscipit quisquam, ipsa porro iure esse eos magni
          et provident veniam laborum! Quaerat neque temporibus facilis.
          Praesentium voluptas delectus laudantium, quisquam eligendi iure aut
          ullam earum fugiat error illo at possimus reiciendis officia est
          soluta, excepturi nihil non. Expedita nobis rem facilis blanditiis quo
          molestias iusto et alias non dignissimos, qui neque nulla vitae,
          deleniti similique aliquid consequatur facere corrupti dolorum hic
          autem nam laboriosam! Iste blanditiis quos deleniti excepturi totam
          animi laborum optio laboriosam magnam id debitis culpa atque nostrum
          voluptates reprehenderit ea veritatis a, neque minima consequatur.
          Pariatur, numquam nemo obcaecati minima nesciunt repellat porro odit
          deserunt quam nulla? Voluptates illo tempore labore iste, aliquam
          reprehenderit maiores ratione fugit, corrupti sapiente eos quod
          eveniet molestias culpa iure aut sunt debitis ipsam. Odit, fugit
          magnam quisquam voluptates tempora in itaque voluptatum impedit
          excepturi dolorum, et ipsum, veniam consequatur? Neque mollitia,
          laboriosam quae, nam velit veritatis perspiciatis porro maxime ut eos
          nisi? Quos, earum libero totam provident exercitationem vero magni
          excepturi enim consequatur, eum molestiae expedita ea corrupti dolore
          et odio quibusdam, ipsa aperiam doloremque beatae ipsam. Minus,
          praesentium laboriosam.
        </Text>
      </Stack>
    </Center>
  );
};

export default Retreat;
