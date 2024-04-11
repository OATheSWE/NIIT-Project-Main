import React from "react";
import { Group, Box, Burger, Drawer, ScrollArea, Text } from "@mantine/core";
import classes from "./NavBar.module.css";
import "./Navbar.css";
import { useDisclosure } from "@mantine/hooks";
import Btn from "../button";
import { styles } from "../../data";
import { Link } from "expo-router";
import Popup from "../Popup";

export default function DashboardNav() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [opened, { open, close }] = useDisclosure(false);

  const openAndToggleDrawer = () => {
    toggleDrawer(); // Call the toggleDrawer function
    open(); // Call the open function
  };

  return (
    <Box className="fixed w-full z-[99999] shadow-xl ">
      <header
        className={`flex justify-between items-center bg-blue-700 md:px-8 font-sans ${classes.header} ${styles.body}`}
      >
        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          size={23}
          color="white"
        />

        <Group h="100%" className="flex items-center">
          <Link href="/">
            <Text className="font-normal text-primary text-[18px] max-[480px]:text-[14px] font-sans text-white">
              Jeffrey Benson
            </Text>
          </Link>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        zIndex={1000000}
        className="font-sans text-black"
      >
        <ScrollArea
          h={`calc(100vh - 80px)`}
          mx="-md"
          className="block mx-auto px-4"
        >
          <button
            className={`font-sans text-black mt-6 w-full flex items-center justify-center ${classes.link}`}
            onClick={openAndToggleDrawer}
          >
            Set Exam 
          </button>

          <Link
            href={`/`}
            className={`font-sans text-black mt-6 w-full flex items-center justify-center ${classes.link}`}
            onPress={toggleDrawer}
          >
            Logout
          </Link>
        </ScrollArea>
      </Drawer>

      <Popup opened={opened} onClose={close} />
    </Box>
  );
}
