import React, { useEffect, useState } from "react";
import { Box, Button, Image, Text, Title } from "@mantine/core";
import { ImageCollection } from "../../../assets";
import { Carousel } from "@mantine/carousel";
import axios from "axios";
import CryptoJS from "crypto-js";
import { faculties } from "../../data";

const StudentPaid = () => {
  const secretKey =
    "21d1f43eee6a5780499e81575231952e7dd1f88274f72f6d0f78ffe213944aa9";

  // State to store the user data
  const [studentData, setStudentData] = useState({
    name: "Student",
    dob: "Date of Birth",
    department: "Department",
  });

  useEffect(() => {
    // Retrieve the unique ID from localStorage
    const encryptedMatricNumber = localStorage.getItem("student");

    const decryptedMatricNumber = CryptoJS.AES.decrypt(
      encryptedMatricNumber,
      secretKey
    );

    // Prepare the data to be sent to the backend
    const data = {
      encrypted_matric_number: decryptedMatricNumber.toString(
        CryptoJS.enc.Utf8
      ),
    };

    // Send an HTTP POST request to your PHP backend
    axios
      .post("http://localhost:8000/home.php", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        // Handle the response from the backend
        const responseData = response.data;
        if (responseData.success) {
          setStudentData({
            name: responseData.name,
            dob: responseData.dob,
            department: responseData.dep,
          });
        } else {
          console.error("Error:", responseData.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Run only once when the component mounts

  const date = new Date(studentData.dob);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <Box>
      <div className="bg-gray-700 w-full p-4 flex justify-between rounded-lg max-sm:flex-col max-sm:space-y-6 max-sm:items-center">
        <div className="flex flex-col justify-between">
          <Text className="text-[13px]" c="dimmed">
            {formattedDate}
          </Text>
          <div>
            <Title order={3} className="text-white font-sans">
              Welcome back, {studentData.name}!
            </Title>
            <Text className="text=[14px]" c="dimmed">
              {studentData.department}
            </Text>
          </div>
        </div>
        <div className="w-[200px] h-[200px]">
          <Image
            src={ImageCollection.disburyLogo}
            className={`w-full h-full object-cover object-center rounded-lg border-2 border-primary`}
            alt="Student Image"
          />
        </div>
      </div>

      <div className="my-20">
        <Title order={3}>Instructors</Title>
        {studentData.department && (
          <Carousel
            slideGap="md"
            loop
            slidesToScroll={2}
            className={`overflow-x-hidden`}
          >
            {faculties
              .flatMap(faculty => faculty.departments) // Access all departments from all faculties
              .find(department => department.name === studentData.department) // Find the matching department
              ?.instructors.map((instructor) => ( // Access instructors from the matching department
                <Carousel.Slide key={instructor.id} className=" max-w-[150px]">
                  <div className="text-center max-w-[100px] h-auto">
                    <Image
                      src={instructor.image}
                      className={`max-w-[100px] max-h-[100px] w-full h-full object-cover object-top rounded-full border-2 border-primary`}
                      alt="Instructor Image"
                    />
                    <Text className="font-semibold mt-2">{instructor.name}</Text>
                  </div>
                </Carousel.Slide>
              ))}
          </Carousel>
        )}
      </div>

      <div className="mb-20">
        <Title order={3}>Enrolled Courses</Title>
        {studentData.department && (
          <Carousel
            height={`150px`}
            slideSize={{ base: "100%", xs: "50%", sm: "33.3%", md: "25%" }}
            slideGap="md"
            loop
            align="start"
            slidesToScroll={2}
            className={`overflow-x-hidden`}
          >
            {faculties
              .flatMap(faculty => faculty.departments) // Access all departments from all faculties
              .find(department => department.name === studentData.department) // Find the matching department
              ?.courses.map((course) => ( // Access courses from the matching department
                <Carousel.Slide key={course.id} className=" ">
                  <div className="flex flex-col justify-between bg-secondary rounded-lg p-3 max-h-[150px] h-full">
                    <Text className="font-semibold">{course.name}</Text>
                    <Button
                      size="xs"
                      className="bg-primary p-2 text-white text-[14px] transition duration-300 border-primary border-2 hover:bg-transparent hover:text-black rounded-full w-1/2"
                    >
                      View
                    </Button>
                  </div>
                </Carousel.Slide>
              ))}
          </Carousel>
        )}
      </div>
    </Box>
  );
};

export default StudentPaid;
