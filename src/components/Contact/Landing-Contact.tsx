import React from "react";
import { Title, Button } from "@mantine/core";
import { styles } from "../../data";
import { ImageCollection } from "../../../assets";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { router } from "expo-router";

const LandingContact = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });
  return (
    <animated.div ref={ref} style={rightColAnimation} className={`${styles.body} py-12 `}>
      <div className={`w-full relative p-20`}>
        {/* Background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${ImageCollection.home})` }}
        ></div>
        {/* Overlay */}
        <div className="absolute w-full h-full inset-0 bg-black bg-opacity-70 rounded-lg"></div>
        <div className="flex flex-col justify-center items-center">
          <Title
            order={1}
            className="font-sans text-white z-30 max-sm:text-[28px]"
            ta="center"
            mt="md"
            mb={40}
          >
            Ready to transform your child's future? Contact us now and take the first step towards a world-class education.
          </Title>
          <Button
            size="lg"
            className="group relative border-2 border-white hover:bg-primary hover:border-primary transition duration-300 px-14 overflow-visible"
            onClick={() => router.replace("/contact")}
          >
            <span className="relative font-normal">CONTACT US</span>
            <span className="absolute top-1/2 w-8 h-0.5 bg-white group-hover:bg-primary left-[95%] transition duration-300"></span>
            <span className="absolute top-1/2 w-8 h-0.5 bg-white group-hover:bg-primary right-[95%] transition duration-300"></span>
          </Button>
        </div>
      </div>
    </animated.div>
  );
};

export default LandingContact;
