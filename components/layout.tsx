import { Button, Center, Stack, Text } from "@mantine/core";
import React, { useState, PropsWithChildren, ReactNode } from "react";
import Navigation from "./Navigation";
import { useRouter } from "next/router";

interface child {
  children: ReactNode;
}
const Layout = ({ children }: PropsWithChildren<child>) => {
  const [showMenu, setShowMenu] = useState(false);
  const [titleColor, setTitleColor] = useState({
    author: "black",
    about: "black",
    contact: "black",
    projects: "black",
  });
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const openBurger = () => {
    setShowMenu(!showMenu);
    setOpened(() => !opened);
  };
  return (
    <>
      <Navigation
        showMenu={showMenu}
        titleColor={titleColor.author}
        openBurger={openBurger}
        opened={opened}
      />
      <main style={{ margin: 0 }}>
        {showMenu ? (
          <Center miw={"100vw"} mih={"100vh"}>
            <Stack spacing="xl">
              <Button
                color={titleColor.about}
                onClick={() => {
                  router.push("/about");
                  setTitleColor(() => {
                    return {
                      author: "black",
                      about: "blue",
                      projects: "black",
                      contact: "black",
                    };
                  });
                  setOpened(false);
                  setShowMenu(false);
                }}
                variant="subtle"
                size="xl"
              >
                About
              </Button>

              <Button
                color={titleColor.projects}
                onClick={() => {
                  router.push("/projects");
                  setTitleColor(() => {
                    return {
                      author: "black",
                      about: "black",
                      projects: "blue",
                      contact: "black",
                    };
                  });
                  setOpened(false);
                  setShowMenu(false);
                }}
                variant="subtle"
                size="xl"
              >
                Projects{" "}
              </Button>
              <Button
                color={titleColor.contact}
                onClick={() => {
                  router.push("/contact");
                  setOpened(false);
                  setShowMenu(false);
                  setTitleColor(() => {
                    return {
                      author: "black",
                      about: "black",
                      projects: "black",
                      contact: "blue",
                    };
                  });
                }}
                variant="subtle"
                size="xl"
              >
                Contact{" "}
              </Button>
            </Stack>
          </Center>
        ) : (
          children
        )}
      </main>
    </>
  );
};

export default Layout;
