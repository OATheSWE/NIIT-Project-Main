import { Title, Text, Grid, Image } from "@mantine/core";
import classes from "./Apply.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import { ImageCollection } from "../../../assets";
import Btn from "../button";
import { router } from "expo-router";

export default function Apply() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <section ref={ref} className={`${styles.body} mt-20`}>
      <Grid gutter={90} className={`font-sans`}>
        <Grid.Col span={{ base: 9 }} className="flex">
          <animated.div style={leftColAnimation} className="">
            <Title className={classes.title} order={2} mb={10}>
              Applications are now open
            </Title>

            <Text className="my-2">
              Unlock the door to a world of opportunities at Top Angel / Disbury.
              Applications are now open – embark on a personalized educational
              journey that recognizes and nurtures each student's unique
              strengths and aspirations.
            </Text>

            <div className="">
              <Btn
                text="Apply"
                style={`rounded-md bord h-[50px] bg-primary justify-center text-[20px] max-lg:text-[17px] font-medium px-8 text-white hover:bg-transparent mt-5 border-2 border-primary hover:text-black`}
                click={() => router.replace("/admission")}
              />
            </div>
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
