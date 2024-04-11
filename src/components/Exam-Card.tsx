import React from "react";
import { Landing } from "../../src/views";
import { Box, Button, Text } from "@mantine/core";

const ExamCard = () => {
  return (
    <Box className="shadow-xl w-full bg-gray-700 text-white px-4 py-3 my-2 flex justify-between items-center rounded-lg">
      <div>
        <Text className="font-bold">Government</Text>
        <Text className="text-[14px]">SS1 Arts</Text>
      </div>
      <Button
        size="md"
        className="border-2 border-transparent bg-blue-700 rounded-lg hover:bg-transparent hover:border-blue-700 transition duration-300"
      >
        Open Exam
      </Button>
    </Box>
  );
};

export default ExamCard;
