import React, { useState } from "react";
import Head from "next/head";
import { Stack, Title, Center } from "@mantine/core";
import Navigation from "../components/Navigation";
import MainCarousel from "../components/MainCarousel";
import Link from "next/link";

export default function Home() {
  const [titleColor, setTitleColor] = useState("white");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Kayla Stamp</title>
        <meta name="description" content="My drafting portfolio" />
        <meta
          name="keywords"
          content="drafting, sustainable, design, autocad, revit, portfolio"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Navigation
          titleColor={titleColor}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
        /> */}

        {showMenu ? (
          <Center miw={"100vw"} mih={"100vh"}>
            <Stack spacing="xl">
              <Link href="/about" style={{ textDecoration: "none" }}>
                <Title order={2} color={"white"}>
                  {" "}
                  About
                </Title>
              </Link>
              <Link href="/projects/" style={{ textDecoration: "none" }}>
                <Title order={2} color={"white"}>
                  {" "}
                  Projects{" "}
                </Title>
              </Link>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Title order={2} color={"white"}>
                  {" "}
                  Contact{" "}
                </Title>
              </Link>
            </Stack>
          </Center>
        ) : (
          <MainCarousel setTitleColor={setTitleColor} />
        )}
      </main>
    </>
  );
}
