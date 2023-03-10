import React from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { AspectRatio, Center, Stack, Text } from "@mantine/core";

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

export default project;
