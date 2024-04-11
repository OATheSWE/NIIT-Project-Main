import { Title, Text, Grid, Image, Button } from "@mantine/core";
import classes from "./About.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import Btn from "../../components/button";
import { useState } from "react";
import { ImageCollection } from "../../../assets";

export default function AboutPage() {
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
      <Grid gutter={90} className={`font-sans mt-12`}>
        <Grid.Col span={{ base: 12, md: 6.7 }}>
          <animated.div style={rightColAnimation} className={``}>
            <Title className={classes.title} order={2}>
              A Tradition of Excellence
            </Title>

            <Text className="my-2">
              At Top Angel Schools, we’re committed to fostering a culture of
              excellence where every student’s potential is realized and
              cherished. Our innovative approach to education seamlessly
              integrates academic rigor with moral and social development,
              ensuring that our students are not only well-prepared
              intellectually but also equipped with the character and ethics to
              lead and excel in all aspects of life. Join us in this educational
              journey where tradition meets innovation, and every child’s future
              shines bright.
            </Text>

            
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5.3 }} className="flex">
          <animated.div
            style={leftColAnimation}
            className="flex items-stretch max-lg:mx-auto"
          >
            <Image
              src={ImageCollection.aboutImage}
              className={`w-full object-cover object-top rounded-xl`}
              alt="About Image"
            />
          </animated.div>
        </Grid.Col>
      </Grid>
      <Grid gutter={90} className={`font-sans mt-12`}>
        <Grid.Col
          span={{ base: 12 }}
          className="flex justify-center items-center"
        >
          <animated.div style={rightColAnimation} className={``}>
            <Title className={`${classes.title} text-center`} order={2}>
              Top Angel Schools/Disbury College: Where Excellence Meets
              Innovation
            </Title>

            <Text className="my-2 text-center">
              At Top Angel Schools, we’re not just teaching; we’re igniting a
              passion for learning and a commitment to excellence. Our story is
              one of transformation, where every child’s potential is recognized
              and nurtured in a community that values innovation, integrity, and
              inclusivity. <br /><br />From our state-of-the-art facilities to our holistic
              approach to education, we ensure that each student is prepared not
              only academically but also morally and socially to thrive in an
              ever-changing world. Our educators are mentors, our classrooms are
              sanctuaries of creativity, and our legacy is the success of every
              student who walks through our doors.
            </Text>
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
