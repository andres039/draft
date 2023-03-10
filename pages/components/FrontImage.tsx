import { AspectRatio, Grid, Overlay, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useHover } from "@mantine/hooks";

const FrontImage = ({ file }) => {
  const { hovered, ref } = useHover();
  console.log("file", file);
  return (
    <Grid.Col xs={6} md={4}>
      <AspectRatio ratio={9 / 4} ref={ref} >
        <Image
          alt="picture of a tiny house"
          src={file.path}
          fill

        />
        {hovered && (
          <Link href={file.link}>
            <Overlay color="#000" opacity={0.5} p={20}>
              <Title color="white">{file.title}</Title>{" "}
            </Overlay>
          </Link>
        )}
      </AspectRatio>
    </Grid.Col>
  );
};

export default FrontImage;
