import React from "react";
import { Carousel } from "@mantine/carousel";
import Card from "./Card"; 
import { styles, testimony } from "../../data";

// Define the Testimonial type inline
interface Testimonial {
  imageSrc: string;
  content: string;
  name: string;
  rating: number;
}

export default function Testimonial() {
  return (
    <Carousel
      height={300}
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap="md"
      loop
      align="start"
      slidesToScroll={2}
      className={`mt-32 ${styles.body} overflow-x-hidden`}
    >
      {testimony.map((testimonial: Testimonial, index: number) => (
        <Carousel.Slide key={index}>
          <Card testimonial={testimonial} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
