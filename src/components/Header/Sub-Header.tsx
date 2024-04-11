import React, { useEffect } from "react";
import { Button, Title } from "@mantine/core";
import { ImageCollection } from "../../../assets";
import { NavBar } from "../../components";
import { styles } from "../../data";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, useScroll } from "@react-spring/web";

const SubHeader = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    // triggerOnce: true,
  });

  // Animation for the SubHeader text
  const textAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 6 },
  });

  return (
    <div ref={ref} className={`relative h-[50vh] min-w-screen ${styles.body}`}>
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${ImageCollection.home})` }}
      ></div>
      {/* Overlay */}
      <div className="absolute w-full h-full inset-0 bg-black bg-opacity-70"></div>
      {/* Your content */}
      <NavBar />
      <div className="flex flex-col justify-center items-center w-[85vw] mt-7">
      <animated.div style={textAnimation}>
        <Title
          order={1}
          className="font-sans text-white z-30"
          ta="center"
          mt="md"
          mb={50}
        >
          About Us
        </Title>
      </animated.div>
      </div>
    </div>
  );
};

export default SubHeader;
