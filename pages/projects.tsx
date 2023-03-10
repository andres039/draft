import { Grid } from "@mantine/core";
import React from "react";
import FrontImage from "../components/FrontImage";

const Projects = () => {
  const files = [
    {
      path: "/../public/covers/commercial.jpg",
      title: "Commercial",
      link: "/projects/commercial",
    },
    {
      path: "/../public/covers/community.jpg",
      title: "Community",
      link: "",
    },
    {
      path: "/../public/covers/Portfolio.jpg",
      title: "Portfolio",
      link: "",
    },
    {
      path: "/../public/covers/renovations.jpg",
      title: "Renovations",
      link: "",
    },
    {
      path: "/../public/covers/retreat.jpg",
      title: "Retreat",
      link: "",
    },
    {
      path: "/../public/covers/site.jpg",
      title: "Site",
      link: "",
    },
    {
      path: "/../public/covers/skate.jpg",
      title: "Skate",
      link: "",
    },
  ];
  return (
    <>
      <Grid pt="10vh" m="0" p="lg">
        {/* {files.map((file) => {
          <FrontImage file={file} key={file.path} />;
        })} */}
        <FrontImage file={files[0]} />
        <FrontImage file={files[1]} />

        <FrontImage file={files[2]} />

        <FrontImage file={files[3]} />

        <FrontImage file={files[4]} />
        <FrontImage file={files[5]} />
        <FrontImage file={files[6]} />
      </Grid>
    </>
  );
};

export default Projects;
