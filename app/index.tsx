import { Box, Image, Text } from "@mantine/core";
import React from "react";
import { ImageCollection } from "../assets";
import { styles } from "../src/data";


const home = () => {
  return (
      <Box className={`flex items-center justify-center bg-gray-300 flex-col h-full w-full overflow-x-hidden ${styles.body}`}>
        <Text className={`font-semibold text-[20px] text-black text-center`}>
          Open up index.tsx in your app folder to start working on your website or app!
        </Text>
        <Image src={ImageCollection.hero} className={`object-cover w-[30%] mt-8`} />
      </Box>
  );
};

export default home;
