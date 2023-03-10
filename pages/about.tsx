import { Avatar, Card, Center, Paper, Stack, Text } from "@mantine/core";
import React from "react";

const about = () => {
  return (
    // <Center w="100vw" h="100vh" pt={"20%"} >
      <Stack  px={"20%"} pt={"20%"} >

          <Avatar
            src="../public/pink.png"
            alt="it's me"
            size="lg"
            radius="lg"
            m="md"
          />
          <Paper shadow="xs" p="md" withBorder>
            <Text size="xl">
              I am a recent dean's list graduate from the Architectural
              Technician program offered at Algonquin College. I have a passion
              for sustainable building design, and I'm dedicated to continue
              learning new skills. I'm extremely detail focused and committed to
              established deadlines. I like to hike and cook. I'm also a big fan
              of all pets.I have a personal goal to study and complete my green
              globes, BCIN, WELL, and LEED green associate exams within the
              year.
            </Text>
          </Paper>

      </Stack>
    // </Center>
  );
};

export default about;
