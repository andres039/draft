import { Grid } from "@mantine/core";
import React from "react";
import FrontImage from "../components/FrontImage";

const Projects = () => {
  const files = [
    {
      path: "https://ik.imagekit.io/4p3voulmt/covers/Portfolio.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396464221",
      title: "Portfolio",
      link: "/projects/portfolio",
    },
    {
      path: "https://ik.imagekit.io/4p3voulmt/covers/retreat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396464321",
      title: "Retreat House",
      link: "/projects/retreat",
    },
    {
      path: "https://ik.imagekit.io/4p3voulmt/covers/renovations.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396464318",
      title: "Renovation",
      link: "/projects/renovations",
    },
    {
      path: "https://ik.imagekit.io/4p3voulmt/covers/skate.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396463632",
      title: "Warming Hut",
      link: "/projects/skate",
    },
    {
      path: "https://ik.imagekit.io/4p3voulmt/covers/commercial.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396464493",
      title: "Commercial",
      link: "/projects/commercial",
    },
    {
      path: "https://ik.imagekit.io/4p3voulmt/covers/community.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396463419",
      title: "Community Center",
      link: "/projects/community",
    },

    {
      path: "https://ik.imagekit.io/4p3voulmt/covers/site.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396463839",
      title: "Site Analysis",
      link: "/projects/site",
    },
    {
      path: "https://ik.imagekit.io/4p3voulmt/Tiny_house/Tiny_House_Project_Picture.jpg?updatedAt=1678631821755",
      title: "THOW",
      link: "/projects/tinyhouse",
    },
  ];
  return (
    <Grid
      pt="10vh"
      m="0"
      mih={"90vh"}
      style={{ backgroundColor: "#E9ECEF" }}
      px={0}
    >
      {files.map((file) => (
        <Grid.Col xs={6} md={4}>
          <FrontImage file={file} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Projects;
