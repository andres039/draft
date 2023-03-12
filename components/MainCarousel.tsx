import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  setTitleColor: (arg: string) => void;
};

const images = [
  {
    url: "https://ik.imagekit.io/4p3voulmt/carousel/Main_Carosel_Picture.jpg?updatedAt=1678589373385",
    alt: "refuge in the snow",
  },
  {
    url: "https://ik.imagekit.io/4p3voulmt/carousel/Main_Carosel_Picture_2.jpg?updatedAt=1678589373406",
    alt: "front of building",
  },
  {
    url: "https://ik.imagekit.io/4p3voulmt/carousel/Main_Carsel_Picture_3.jpg?updatedAt=1678589373995",
    alt: "rendered how in the mountain",
  },
  {
    url: "https://ik.imagekit.io/4p3voulmt/carousel/Main_Carosel_Pciture_4.jpg?updatedAt=1678589374962",
    alt: "inside the tiny house",
  },
];
const MainCarousel = ({ setTitleColor }: Props) => {
  const autoplay = useRef(Autoplay({ delay: 2500 }));

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
      {images.map((image) => (
        <Carousel.Slide w={"100vw"} h={"100vh"} key={image.url}>
          <Image alt={image.alt} src={image.url}  fill style={{opacity: 1}} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
