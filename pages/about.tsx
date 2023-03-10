import {
  Avatar,
  BackgroundImage,
  Card,
  Center,
  Group,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";

const about = () => {
  return (
    // <Center w="100vw" h="100vh" pt={"20%"} >
    <BackgroundImage
      src="https://ik.imagekit.io/4p3voulmt/covers/retreat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396464321"
      radius="sm"
      h={"100vh"}
    >
      <Stack px={"20%"} pt={"20%"} align="center">
        <Avatar
          src="https://whatsondisneyplus.com/wp-content/uploads/2021/09/lisa.png"
          alt="it's me"
          size="xl"
          radius="lg"
          m="md"
        />
        <Paper
          shadow="xs"
          p="md"
          withBorder
          style={{ opacity: 2, backgroundColor: "#DBE4FF" }}
        >
          <Text size="xl">
            I am a recent dean&apos;s list graduate from the Architectural
            Technician program offered at Algonquin College. I have a passion
            for sustainable building design, and I&apos;m dedicated to continue
            learning new skills. I&apos;m extremely detail focused and committed
            to established deadlines. I like to hike and cook. I&apos;m also a
            big fan of all pets.I have a personal goal to study and complete my
            green globes, BCIN, WELL, and LEED green associate exams within the
            year.
          </Text>
        </Paper>
      </Stack>
    </BackgroundImage>
    // </Center>
  );
};

export default about;
