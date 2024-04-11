import React, { useEffect, useState } from "react";
import { Button, Title } from "@mantine/core";
import { ImageCollection } from "../../../assets";
import { NavBar } from "../../components";
import { styles } from "../../data";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollUp = () => {
    // Adjust the value (-100) based on how much you want the page to scroll down
    window.scrollTo({ top: scrollPosition + 1100, behavior: "smooth" });
  };

  const [ref, inView] = useInView({
    threshold: 0.4,
    // triggerOnce: true,
  });

  // Array of background images
  const backgroundImages = [
    { id: 1, src: ImageCollection.banner },
    { id: 2, src: ImageCollection.banner2 },
    { id: 3, src: ImageCollection.banner3 },
    { id: 4, src: ImageCollection.banner4 },
    { id: 5, src: ImageCollection.banner5 },
  ];

  // State to keep track of current background image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation for the header text
  const textAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  // Use effect to keep track of time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div
      ref={ref}
      className={`relative min-h-screen min-w-screen ${styles.body}`}
    >
      {/* Background image */}
      {backgroundImages.map((image, index) => (
        <animated.div
          key={index}
          className="absolute inset-0 w-screen h-screen bg-cover bg-center transition duration-300"
          style={{
            backgroundImage: `url(${image.src})`,
            opacity: index === currentIndex ? 1 : 0,
          }}
        ></animated.div>
      ))}
      {/* Overlay */}
      <div className="absolute w-screen h-screen inset-0 bg-black bg-opacity-60"></div>
      {/* Your content */}
      <NavBar />
      <div className="flex flex-col justify-center items-center w-[85vw] h-[70vh]">
        <animated.div style={textAnimation}>
          <Title
            order={1}
            className="font-sans text-white z-30 max-sm:text-[30px]"
            ta="center"
            mt="md"
            mb={50}
          >
            Welcome to Top Angel Schools / Disbury College
          </Title>
        </animated.div>
        <animated.div style={textAnimation}>
          <p className="-mt-10 max-w-[600px] w-full text-center text-white">
            Discover a place where excellence and values converge, where every
            child's potential is cherished and nurtured. Welcome to Top
            Angel/Disbury – shaping the leaders of tomorrow.
          </p>
        </animated.div>
        <animated.div style={textAnimation}>
          <Button
            size="lg"
            className="group relative border-2 border-white hover:bg-primary hover:border-primary transition duration-300 px-14 mt-4 overflow-visible"
            onClick={handleScrollUp}
          >
            <span className="relative font-normal">Visit Us to Know More</span>
            <span className="absolute top-1/2 w-8 h-0.5 bg-white group-hover:bg-primary left-[95%] transition duration-300"></span>
            <span className="absolute top-1/2 w-8 h-0.5 bg-white group-hover:bg-primary right-[95%] transition duration-300"></span>
          </Button>
        </animated.div>
      </div>
    </div>
  );
};

export default Header;
