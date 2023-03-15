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
import projects from "../../projects.json";

export const getStaticPaths = async () => {
  const data = projects.map((project) => {
    return {
      params: {
        project: project.title.toLowerCase(),
      },
    };
  });
  return { paths: data, fallback: false };
};

type Context = { params: { project: string } };
interface Project {
  project: { images: string[]; title: string; list?: string[]; text: string[] };
}

export const getStaticProps = async (context: Context) => {
  const project = projects.find(
    (pro) => pro.title.toLowerCase() === context.params.project.toLowerCase()
  );
  return {
    props: { project },
  };
};

const Project = ({ project }: Project) => {
  return (
    <Center pt={80}>
      <Stack spacing="md" p="lg">
        <Carousel loop withIndicators w={"95vw"} h={"100vh"}>
          {project.images.map((image) => (
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
          <Title>{project.title}:</Title>
          <Space h="lg" />
          {project.list && (
            <>
              <List>
                {project.list.map((item) => (
                  <List.Item key={project.title}>{item}</List.Item>
                ))}
              </List>
              <Space h="lg" />{" "}
            </>
          )}
          {project.text.map((p) => (
            <div key={project.title}>
              <Text>{p}</Text> <Space h="lg" />
            </div>
          ))}
        </Box>
      </Stack>
    </Center>
  );
};

export default Project;
