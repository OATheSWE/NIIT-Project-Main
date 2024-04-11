import { Title, Text, Grid, Image, Button, Divider } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import { useState } from "react";
import { ImageCollection } from "../../../assets";

const ApplySchool = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });
  return (
    <section ref={ref} className={`w-full py-10 ${styles.body} bg-accent`}>
      <Title className={`max-sm:[text-[30px]`} order={2}>
        Embracing Every Child’s Potential
      </Title>
      <Grid gutter={90} className={`font-sans mt-12`}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <animated.div style={rightColAnimation} className={``}>
            <Text className="">
              At Top Angel Schools /Disbury College, we see each child as a
              unique individual with boundless potential. Our admissions process
              is designed to understand and embrace the distinct talents and
              aspirations of every student. We delve beyond the surface to
              discover the innate strengths that make each child special. Our
              principal’s philosophy is rooted in the belief that with the right
              guidance, every child can excel in their chosen path, becoming the
              best in the world at their craft.
            </Text>
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }} className="flex">
          <animated.div
            style={leftColAnimation}
            className="flex items-stretch max-lg:mx-auto"
          >
            <Text className="">
              We believe that a child’s educational journey is a partnership
              between the school and the family. That’s why we take the time to
              know the parents and their expectations. This collaborative
              approach allows us to tailor our teaching methods to each child’s
              needs, ensuring that they receive the most nurturing and effective
              education possible. Our admission process reflects this belief,
              focusing on the child’s psychological well-being and logical
              abilities, while also considering the parents’ insights during the
              interview.
            </Text>
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
};

export default ApplySchool;
