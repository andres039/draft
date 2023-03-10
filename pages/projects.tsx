import { Grid } from "@mantine/core";
import React from "react";
import FrontImage from "../components/FrontImage";

const Projects = () => {
  const files = [
    {
      path: "https://ik.imagekit.io/4p3voulmt/covers/commercial.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396464493",
      title: "Commercial",
      link: "/projects/commercial",
    },
    {
      path: "https://ik.imagekit.io/4p3voulmt/covers/community.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396463419",
      title: "Community",
      link: "/projects/community",
    },
    {
      path: "https://ik.imagekit.io/4p3voulmt/covers/Portfolio.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396464221",
      title: "Portfolio",
      link: "/projects/portfolio",
    },
    {
      path: "https://ik.imagekit.io/4p3voulmt/covers/renovations.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396464318",
      title: "Renovations",
      link: "/projects/renovations",
    },
    {
      path: "https://ik.imagekit.io/4p3voulmt/covers/retreat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396464321",
      title: "Retreat",
      link: "/projects/retreat",
    },
    {
      path: "https://ik.imagekit.io/4p3voulmt/covers/site.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396463839",
      title: "Site",
      link: "/projects/site",
    },
    {
      path: "https://ik.imagekit.io/4p3voulmt/covers/skate.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678396463632",
      title: "Skate",
      link: "/projects/skate",
    },
  ];
  return (
    <>
      <Grid pt="10vh" m="0" p="lg" mih={"90vh"} style={{ backgroundColor: "#E9ECEF"}}>
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
