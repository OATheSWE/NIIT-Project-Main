import { Image } from "@mantine/core";
/// @ts-ignore
import { ImageCollection } from "../../../assets";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, useScroll } from "@react-spring/web";

export default function SchoolVideo() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <animated.div ref={ref} style={leftColAnimation} className="w-full md:px-12">
      <video
        src={ImageCollection.schoolVideo}
        className="w-full mb-10"
        controls
      />
    </animated.div>
  );
}
