import { Grid, Image } from "@mantine/core";
import { galleryImages, styles } from "../../data";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const GalleryPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const trail = useTrail(galleryImages.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300, // Adjust this delay based on your preference
  });

  const allImages = trail.map((style, index) => (
    <Grid.Col span={{ base: 12, xs: 6, sm: 4, md: 3 }} key={index}>
      <animated.div style={style}>
        <Image
          src={galleryImages[index].src}
          className={`w-full h-[250px] object-cover object-top rounded-xl`}
          alt="Gallery Image"
        />
      </animated.div>
    </Grid.Col>
  ));
  return <Grid className={`${styles.body} pt-16`} ref={ref}>{allImages}</Grid>;
};

export default GalleryPage;
