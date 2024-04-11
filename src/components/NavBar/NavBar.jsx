import React, { useEffect, useState } from "react";
import {
  Group,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  Image,
  Menu,
  Collapse,
} from "@mantine/core";
import classes from "./NavBar.module.css";
import "./Navbar.css";
import { useDisclosure } from "@mantine/hooks";
import { navLinks, styles } from "../../data";
import { Link } from "expo-router";
import { ImageCollection } from "../../../assets";

export default function NavBar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [imageSrc, setImageSrc] = useState(ImageCollection.topAngelLogo);
  const [spinning, setSpinning] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setSpinning(true);
      setTimeout(() => {
        setSpinning(false);
        setImageSrc((prevSrc) =>
          prevSrc === ImageCollection.topAngelLogo
            ? ImageCollection.disburyLogo
            : ImageCollection.topAngelLogo
        );
      }, 2000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);


  const items = navLinks.map((link, index) => {
    const menuItems = link.links?.map((item, index) => (
      <Menu.Item key={index}>
        <Link
          href={`${item.href}`}
          className={`font-sans transitin duration-300 hover:text-primary`}
        >
          {item.text}
        </Link>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.text}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              key={index}
              className={`font-sans ${classes.link} relative group cursor-pointer`}
            >
              {link.text}
              <span className="absolute h-0.5 w-0 bg-primary bottom-[1px] left-1/2 transition-all ease-out duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={index}
        href={`${link.href}`}
        className={`font-sans ${classes.link} relative group`}
      >
        {link.text}
        <span className="absolute h-0.5 w-0 bg-primary bottom-[1px] left-1/2 transition-all ease-out duration-300 group-hover:w-full group-hover:left-0"></span>
      </Link>
    );
  });

  return (
    <Box className="">
      <header
        className={`flex justify-between items-center  font-sans ${classes.header}`}
      >
        <Group h="100%" className="flex items-center">
          <Link href="/">
          <Image
          src={imageSrc}
          alt="School Logo"
          className={`w-[60px] ${spinning ? 'animate-spin' : ''}`}
        />
          </Link>
        </Group>

        <Group h="100%" gap={0} className="hidden md:flex">
          {items}
        </Group>

        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          hiddenFrom={`sm`}
          size={23}
          color="white"
        />
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="70%"
        position="right"
        hiddenFrom="sm"
        zIndex={1000000}
        className="font-sans text-black p-0 m-0"
      >
        <ScrollArea
          h={`calc(100vh - 80px)`}
          mx="-md"
          className="px-10"
          bg={`#000000B3`}
        >
          {/* {items} */}
          {navLinks.slice(0, 4).map((link, index) => (
            <Link
              key={index}
              href={`${link.href}`}
              className={`font-sans text-white ${classes.link} relative group`}
              onPress={toggleDrawer}
            >
              {link.text}
              <span className="absolute h-0.5 w-0 bg-primary bottom-[1px] left-1/2 transition-all ease-out duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
          {navLinks.slice(4).map((link, index) => (
            <a
              key={index}
              className={`font-sans text-white ${classes.link} cursor-pointer relative group`}
              onClick={toggleLinks}
            >
              {link.text}
              <span className="absolute h-0.5 w-0 bg-primary bottom-[1px] left-1/2 transition-all ease-out duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
          {navLinks.map((link, index) => (
            <React.Fragment key={index}>
              {link.links ? (
                <Collapse in={linksOpened} className="flex flex-col justify-center transition items-center">
                  {link.links.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sublink.href}
                      className={`font-sans transition text-white duration-300 hover:text-primary mt-2`}
                    >
                      {sublink.text}
                    </Link>
                  ))}
                </Collapse>
              ) : null}
            </React.Fragment>
          ))}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
