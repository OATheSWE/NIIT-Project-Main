import { Text, Container, ActionIcon, Group, rem, Image } from "@mantine/core";
/// @ts-ignore
import classes from "./Footer.module.css";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { IconImports, ImageCollection } from "../../../assets";
import { footer, styles } from "../../data";

export default function Footer() {
  const groups = footer.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={` ${classes.link} text-[14px] transition duration-300 hover:text-primary text-center`}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  const [imageSrc, setImageSrc] = useState(ImageCollection.topAngelLogo);
  const [spinning, setSpinning] = useState(false);
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

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

  return (
    <footer className={` ${classes.footer} ${styles.body}`}>
      <Container className={classes.inner} p={0}>
        <div className={classes.logo}>
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image
                src={imageSrc}
                alt="School Logo"
                className={`w-[60px] ${spinning ? "animate-spin" : ""}`}
              />
            </Link>
            <Text> Top Angels/Disbury </Text>
          </div>
          <Text size="xs" c="dimmed" className={classes.description}>
            Empowering minds, nurturing hearts, and shaping futures.
          </Text>
          <Text size="xs" className={classes.description}>
            +234 907 820 4521
          </Text>
          <Text size="xs" className={classes.description}>
            info@topangels-disbury.com.ng
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter} px={0}>
        <Text c="dimmed" size="sm">
          © {currentYear} e-Byte Africa. All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            className="transition duration-300 hover:bg-primary rounded-full"
            component="a"
            href="https://www.facebook.com/DisburyCollege/"
            target="_blank"
          >
            <IconImports.Facebook size={24} color="#000" />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            className="transition duration-300 hover:bg-primary rounded-full"
            component="a"
            href="https://www.linkedin.com/in/top-angel-schools-06780020a/"
            target="_blank"
          >
            <IconImports.Linkedin size={24} color="#000" />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            className="transition duration-300 hover:bg-primary rounded-full"
            component="a"
            href="https://www.instagram.com/topangelschools/"
            target="_blank"
          >
            <IconImports.Instagram size={24} color="black" />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
