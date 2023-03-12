import { Button, Center, Stack } from "@mantine/core";
import React, { useState, PropsWithChildren, ReactNode } from "react";
import Navigation from "./Navigation";
import { useRouter } from "next/router";

interface child {
  children: ReactNode;
}
const Layout = ({ children }: PropsWithChildren<child>) => {
  const [showMenu, setShowMenu] = useState(false);
  const [titleColor] = useState("black");
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
        titleColor={titleColor}
        openBurger={openBurger}
        opened={opened}

      />
      <main style={{ margin: 0 }}>
        {showMenu ? (
          <Center miw={"100vw"} mih={"100vh"}>
            <Stack spacing="xl">
              <Button
                color="dark"
                onClick={() => {
                  router.push("/about");
                  setOpened(false);
                  setShowMenu(false);
                }}
                variant="subtle"
                size="xl"
              >
                About
              </Button>

              <Button
                color="dark"
                onClick={() => {
                  router.push("/projects");
                  setOpened(false);
                  setShowMenu(false);
                }}
                variant="subtle"
                size="xl"
              >
                Projects{" "}
              </Button>
              <Button
                color="dark"
                onClick={() => {
                  router.push("/contact");
                  setOpened(false);
                  setShowMenu(false);
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
