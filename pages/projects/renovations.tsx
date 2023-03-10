import React from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { AspectRatio, Center, Stack, Text } from "@mantine/core";

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
    <Center pt={80} m={0} px={0}>
      <Stack spacing="md" px="0" maw={"95vw"}>
        <Carousel loop withIndicators w={"100vw"} h={"100vh"} m={0}>
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

export default Renovations;
