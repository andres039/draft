import React, { useState } from "react";
import { Burger, Group, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

const Navigation = ({
  opened,
  openBurger,
  titleColor,
  showMenu,
  setShowMenu,
}) => {
  const matches = useMediaQuery("(max-width: 56.25em)");
  // const [opened, setOpened] = useState(false);
  // const openBurger = () => {
  //   setShowMenu(!showMenu);
  //   setOpened(() => !opened);
  // };
  return (
    <Group
      miw={"100vw"}
      style={{ zIndex: 20, position: "absolute" }}
      position="apart"
      px={35}
      py={15}
    >
      <Link href="/" style={{ textDecoration: "none", color: titleColor }}>
        <Title color={titleColor}>Kayla Stamp</Title>
      </Link>
      {matches ? (
        <Burger opened={opened} color={titleColor} onClick={openBurger} />
      ) : (
        <Group spacing="xl">
          <Link
            href="/about"
            style={{ textDecoration: "none", color: titleColor }}
          >
            <Title order={2} color={titleColor}>
              {" "}
              About
            </Title>
          </Link>
          <Link
            href="/projects"
            style={{ textDecoration: "none", color: titleColor }}
          >
            <Title order={2} color={titleColor}>
              {" "}
              Projects{" "}
            </Title>
          </Link>
          <Link
            href="/contact"
            style={{ textDecoration: "none", color: titleColor }}
          >
            <Title order={2} color={titleColor}>
              {" "}
              Contact{" "}
            </Title>
          </Link>
        </Group>
      )}
    </Group>
  );
};

export default Navigation;
