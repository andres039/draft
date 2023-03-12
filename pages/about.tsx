import {
  Avatar,
  CSSObject,
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
    imageSize: "50%"
  };
  return (
    <MediaQuery largerThan="md" styles={paddingTop}>
      <Stack px={"20%"} pt={"20%"} align="center">
        <MediaQuery largerThan="md" styles={thin}>
          <Paper p="xl">
            <Text size="xl">
              I am a dean&apos;s list graduate from the Architectural Technician
              program offered at Algonquin College. I have a passion for
              sustainable building design, and I&apos;m dedicated to continuing
              learning new skills. I&apos;m extremely detail focused and
              committed to established deadlines.
            </Text>
            <Space h="lg" />
            <Text size="xl">
              I like to hike and cook. I&apos;m also a big fan of all pets. I
              have a personal goal to study and complete my green globes, BCIN,
              WELL, and LEED green associate exams within the year.
            </Text>
          </Paper>
        </MediaQuery>
        <Avatar
          src="https://ik.imagekit.io/4p3voulmt/Profile_Picture.jpg?updatedAt=1678589781114"
          alt="It's me"
          size={"12vh"}
          radius="50%"
          m="md"

        />
      </Stack>
    </MediaQuery>
    // </Center>
  );
};

export default about;
