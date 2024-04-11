import { Title } from "@mantine/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { faculties } from "../../data";

const TimetablePage = () => {
  const secretKey =
    "21d1f43eee6a5780499e81575231952e7dd1f88274f72f6d0f78ffe213944aa9";

  // State to store the timetable for the student's department
  const [timetableData, setTimetableData] = useState([]);
  const [dep, setDep] = useState("");

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
          // Find the student's department in the faculties array
          const departmentTimetable = faculties
            .flatMap((faculty) => faculty.departments)
            .find(department => department.name === responseData.dep)?.timetable;

          if (departmentTimetable) {
            setTimetableData(departmentTimetable);
            setDep(responseData.dep);
          } else {
            console.error("Timetable not found for department:", responseData.dep);
          }
        } else {
          console.error("Error:", responseData.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Run only once when the component mounts

  return (
    <div className="mb-10">
      <Title order={2} className="text-center mb-5">
        {dep} Timetable 
      </Title>
      <table className="border-[1.5px] border-black w-full">
        <thead>
          <tr className="border-[1.5px] border-black">
            <th className="border-[1.5px] border-black p-2">Day</th>
            <th className="border-[1.5px] border-black p-2">Time</th>
            <th className="border-[1.5px] border-black p-2">Course</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((entry, index) => (
            <tr key={index} className="border-[1.5px] border-black">
              <td className="border-[1.5px] border-black p-2">{entry.day}</td>
              <td className="border-[1.5px] border-black p-2">{entry.time}</td>
              <td className="border-[1.5px] border-black p-2">{entry.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimetablePage;
