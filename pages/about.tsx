import {
  Avatar,
  BackgroundImage,
  Card,
  Center,
  CSSObject,
  Group,
  MediaQuery,
  Paper,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";

const about = () => {
  const thin: CSSObject = {
    maxWidth: "40vw",
  };
  const paddingTop: CSSObject = {
    pt: "10%",
  };
  return (
    <BackgroundImage
      src="https://ik.imagekit.io/4p3voulmt/covers/retreat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396464321"
      radius="sm"
      mih={"100vh"}
    >
    <MediaQuery largerThan="md" styles={paddingTop}>
      <Stack px={"20%"} pt={"10%"} align="center">
        <Avatar
          src="https://whatsondisneyplus.com/wp-content/uploads/2021/09/lisa.png"
          alt="it's me"
          size="xl"
          radius="lg"
          m="md"
        />
        <MediaQuery largerThan="md" styles={thin}>
          <Paper
            shadow="lg"
            p="md"
            withBorder
            style={{ backgroundColor: "#D3F9D8" }}
          >
            <Text size="xl">
              I am a recent dean&apos;s list graduate from the Architectural
              Technician program offered at Algonquin College. I have a passion
              for sustainable building design, and I&apos;m dedicated to
              continue learning new skills. I&apos;m extremely detail focused
              and committed to established deadlines.
            </Text>
            <Space h="lg" />
            <Text size="xl">
              I like to hike and cook. I&apos;m also a big fan of all pets.I
              have a personal goal to study and complete my green globes, BCIN,
              WELL, and LEED green associate exams within the year.
            </Text>
          </Paper>
        </MediaQuery>
      </Stack>
      </MediaQuery>
    </BackgroundImage>
    // </Center>
  );
};

export default about;
