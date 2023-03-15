import { Grid } from "@mantine/core";
import React from "react";
import FrontImage from "../components/FrontImage";
import paths from "../paths.json";

export const getStaticProps = () => {
  const data = paths;
  return {
    props: { data },
  };
};

interface Path {
  path: string;
  title: string;
  link: string;
}
type Data = { data: Path[] };

const Projects = ({ data }: Data) => {

  return (
    <Grid
      pt="10vh"
      m="0"
      mih={"90vh"}
      style={{ backgroundColor: "#E9ECEF" }}
      px={10}
      gutter={28}
    >
      {data.map((file) => (
        <Grid.Col xs={6} md={4} key={file.path}>
          <FrontImage file={file} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Projects;
