import React, { useEffect, useState } from "react";
import { Group, Box, Burger, Drawer, ScrollArea, Text } from "@mantine/core";
import classes from "./NavBar.module.css";
import "./Navbar.css";
import { useDisclosure } from "@mantine/hooks";
import Btn from "../button";
import { dashboardLinks, styles } from "../../data";
import { Link, router } from "expo-router";
// import Popup from "../Popup";
import CryptoJS from "crypto-js";
import axios from "axios";

export default function AsideBar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [opened, { open, close }] = useDisclosure(false);

  const openAndToggleDrawer = () => {
    toggleDrawer(); // Call the toggleDrawer function
    open(); // Call the open function
  };

  const secretKey =
    "21d1f43eee6a5780499e81575231952e7dd1f88274f72f6d0f78ffe213944aa9";

  // State to store the user name
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Retrieve the unique ID from localStorage
    const encryptedMatricNumber = localStorage.getItem("student");

    const decryptedMatricNumber = CryptoJS.AES.decrypt(
      encryptedMatricNumber,
      secretKey
    );

    // Prepare the data to be sent to the backend
    const data = {
      encrypted_matric_number: decryptedMatricNumber.toString(CryptoJS.enc.Utf8),
    };

    // Send an HTTP POST request to your PHP backend
    axios
      .post("http://localhost:8000/getStudentsName.php", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        // Handle the response from the backend
        const responseData = response.data;
        if (responseData.success) {
          // Update state with the user name
          setUserName(responseData.name);
        } else {
          console.error("Error:", responseData.error);
          setUserName("User");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setUserName("User");
      });
  }, []); // Run only once when the component mounts

  const renderedLinks = dashboardLinks.map((link, index) => {
    if (index === dashboardLinks.length - 1) {
      // If it's the last link, add the logout functionality
      return (
        <button
          key={index}
          className={`font-sans text-black mt-6 w-full flex items-center justify-center ${classes.link}`}
          onClick={() => {
            const confirmed = window.confirm("Are you sure you want to logout?");
            // Clear the value from local storage
            if (confirmed) {
            localStorage.removeItem("student");
            router.replace("/");
            }
          }}
        >
          {link.text}
        </button>
      );
    } else {
      // For other links, render as usual
      return (
        <Link
          key={index}
          href={link.href}
          className={`font-sans text-black mt-6 w-full flex items-center justify-center ${classes.link}`}
          onPress={toggleDrawer}
        >
          {link.text}
        </Link>
      );
    }
  });

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
          {userName && (
            <Text className="font-normal text-[18px] max-[480px]:text-[14px] font-sans text-white">
              {userName}
            </Text>
          )}
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="70%"
        position="left"
        zIndex={1000000}
        className="font-sans text-black"
      >
        <ScrollArea
          h={`calc(100vh - 80px)`}
          mx="-md"
          className="block mx-auto px-4"
        >
          {/* <button
            className={`font-sans text-black mt-6 w-full flex items-center justify-center ${classes.link}`}
            onClick={openAndToggleDrawer}
          >
            Set Exam
          </button> */}

          {renderedLinks}
        </ScrollArea>
      </Drawer>

      {/* <Popup opened={opened} onClose={close} /> */}
    </Box>
  );
}
