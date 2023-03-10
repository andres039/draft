import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import tinyHousePic from "../../public/tinyHouse.jpeg";
import tinyHouseInside from "../../public/tinyHouseInside.jpg";
import eagle from "../../public/eagle.jpg";
import Autoplay from "embla-carousel-autoplay";

const MainCarousel = ({ setTitleColor }) => {
  const autoplay = useRef(Autoplay({ delay: 2200 }));

  return (
    <Carousel
      loop
      w={"100vw"}
      mx="auto"
      onSlideChange={(k) =>
        k % 2 === 0 ? setTitleColor("black") : setTitleColor("white")
      }
      plugins={[autoplay.current]}
      withControls={false}
      withIndicators
    >
      <Carousel.Slide w={"100vw"} h={"100vh"}>
        <Image alt="picture of a tiny house" src={tinyHousePic} fill />
      </Carousel.Slide>
      <Carousel.Slide w={"100vw"} h={"100vh"}>
        <Image alt="eagle painting" src={eagle} fill />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image alt="inside the tiny house" src={tinyHouseInside} fill />
      </Carousel.Slide>
    </Carousel>
  );
};

export default MainCarousel;
