import React from "react";
import { Text, Group, Rating, Image } from "@mantine/core";

interface Testimonial {
  imageSrc: string;
  content: string;
  name: string;
  rating: number;
}

interface Props {
  testimonial: Testimonial;
}

const Card: React.FC<Props> = ({ testimonial }) => {
  return (
    <div className="w-full flex bg-secondary p-5 rounded-lg font-sans h-auto">
      <div className="flex flex-col space-y-4">
        <Text size="sm">{testimonial.content}</Text>
        <Text className="text-[18px] font-bold">{testimonial.name}</Text>
        <Rating
          value={testimonial.rating}
          fractions={2}
          readOnly
          color="#f44336"
        />
        <Image
          src={testimonial.imageSrc}
          className={`w-[50px] h-[50px] object-cover rounded-full`}
          alt="Student Image"
        />
      </div>
    </div>
  );
};

export default Card;
