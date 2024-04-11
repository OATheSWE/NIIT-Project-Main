import React from "react";
import { Text, Group, Rating, Image, Title, Grid } from "@mantine/core";
import { admissionProcesses, galleryImages, styles } from "../../data";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";


const Process: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const trail = useTrail(admissionProcesses.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300, // Adjust this delay based on your preference
  });

  const allProcesses = trail.map((style, index) => (
    <Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={index}>
      <animated.div style={style} className="flex space-x-4 w-full font-sans">
      <Group className="flex items-start">
        <Title
          order={1}
          className="font-sans z-30 text-primary"
          ta="center"
        >
          {admissionProcesses[index].number}
        </Title>
      </Group>
      <div className="flex flex-col space-y-4">
      <Text size="md" className="mt-1 font-semibold">{admissionProcesses[index].title}</Text>
        <Text size="sm">{admissionProcesses[index].content}</Text>
      </div>
    </animated.div>
    </Grid.Col>
  ));

  return (
    <Grid className={`${styles.body} pt-16`} ref={ref}>{allProcesses}</Grid>
  );
};

export default Process;
