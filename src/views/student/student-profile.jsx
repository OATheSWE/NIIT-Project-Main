import React, { useEffect, useState } from "react";
import {
  Paper,
  Title,
  Group,
  Select,
  Container,
  Center,
  TextInput,
  PasswordInput,
} from "@mantine/core";
import axios from "axios";
import CryptoJS from "crypto-js";
import { styles } from "../../data";
import classes from "./student-auth.module.css";
import { DateInput } from "@mantine/dates";


export default function StudentProfile(props) {
  const [formData, setFormData] = useState({
    name: "",
    faculty: "",
    dob: null,
    department: "",
    password: "",
  });


  const handleDateChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      dob: value,
    }));
  };

  const [matricNumber, setMatricNumber] = useState(null); // State to store decrypted unique ID

  const secretKey =
    "21d1f43eee6a5780499e81575231952e7dd1f88274f72f6d0f78ffe213944aa9";

  useEffect(() => {
    // Retrieve the unique ID from localStorage
    const encryptedMatricNumber = localStorage.getItem("student");

    const decryptedMatricNumber = CryptoJS.AES.decrypt(
      encryptedMatricNumber,
      secretKey
    );

    // Prepare the data to be sent to the backend
    const data = {
      encrypted_matric_number: decryptedMatricNumber.toString(CryptoJS.enc.Utf8),
    };

    // Store decrypted unique ID in state
    setMatricNumber(data.encrypted_matric_number);

    // Send an HTTP POST request to your PHP backend
    axios
      .post("http://localhost:8000/getStudentData.php", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        // Handle the response from the backend
        const responseData = response.data;
        const responseStudent = JSON.parse(response.data.studentData);
        // console.log(responseData);
        if (responseData.success) {
          // Update state with the user data
          const date = new Date(responseStudent.dob);

          setFormData({
            name: responseStudent.name,
            faculty: responseStudent.faculty,
            dob: date,
            department: responseStudent.department,
            password: responseStudent.password,
          });
        } else {
          console.error("Error:", error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Run only once when the component mounts

  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission if called from useEffect

    // Prompt the user to ask if they want to update their credentials
    const confirmUpdate = window.confirm(
      "You are about to update your student data!"
    );

    if (confirmUpdate) {
      try {
        // Include unique ID in form data
        const updatedFormData = { formData: JSON.stringify(formData), matric_number: matricNumber };

        const response = await axios.post(
          "http://localhost:8000/studentProfileUpdate.php",
          updatedFormData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (response.data.success) {
          alert(response.data.message);
        } else {
          alert(response.data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <Paper className={`w-full pt-28 ${styles.body} pb-10`}>
      <Title
        order={2}
        className={`font-sans ${classes.title}`}
        ta="center"
        mb={50}
      >
        Student Information
      </Title>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Your name"
          placeholder="Jeffrey Benson"
          size="sm"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <Select
          label="Your Faculty"
          placeholder="Faculty"
          mt="md"
          size="sm"
          name="faculty"
          value={formData.faculty}
          disabled
        />

        <DateInput
          label="Date of Birth"
          placeholder="Pick date"
          name="dob"
          value={formData.dob}
          onChange={handleDateChange}
          required
          size="sm"
          mt={`md`}
        />

        <Select
          label="Your Department"
          placeholder="Department"
          mt="md"
          size="sm"
          name="department"
          value={formData.department}
          disabled
          
        />

        <PasswordInput
          label="Your password"
          size="sm"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          mt={`md`}
        />

        <Center mt={`4rem`} className="">
          <button
            type="submit"
            className="bg-blue-700 rounded-lg hover:bg-gray-700 transition duration-300 p-3 text-white w-full"
          >
            Update
          </button>
        </Center>
      </form>
    </Paper>
  );
}
