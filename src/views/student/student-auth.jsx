import React, { useState } from "react";
import {
  Paper,
  TextInput,
  Button,
  Title,
  Text,
  Anchor,
  PasswordInput,
  PaperProps,
  Group,
  Select,
} from "@mantine/core";
/// @ts-ignore
import classes from "./student-auth.module.css";
import { upperFirst, useToggle } from "@mantine/hooks";
import { ImageCollection } from "../../../assets";
import axios from "axios";
import { faculties } from "../../data";
import { router } from "expo-router";
import CryptoJS from "crypto-js";
import { DateInput } from "@mantine/dates";

export default function StudentAuth() {
  const [type, toggle] = useToggle(["register", "login"]);
  const secretKey =
    "21d1f43eee6a5780499e81575231952e7dd1f88274f72f6d0f78ffe213944aa9";
  const [formData, setFormData] = useState({
    name: "",
    faculty: "",
    dob: null,
    department: "",
    password: "",
    matricNumber: "",
  });

  const [departments, setDepartments] = useState([]);
  const [departmentDisabled, setDepartmentDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      dob: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    const selectedFaculty = faculties.find((faculty) => faculty.name === value);
    if (selectedFaculty) {
      const departmentNames = selectedFaculty.departments.map(
        (department) => department.name
      );
      setDepartments(departmentNames);
      setDepartmentDisabled(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (type === "register") {
        const response = await axios.post(
          "http://localhost:8000/signup.php",
          { formData: JSON.stringify(formData) },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (response.data.success) {
          alert("Sign Up Successful");
          alert(`Your Matric Number is: ${response.data.matricNumber}`);
          setFormData({
            name: "",
            faculty: "",
            password: "",
            matricNumber: "",
          });
          const status = CryptoJS.AES.encrypt("unpaid", secretKey).toString();

          localStorage.setItem("status", status);
        }
      } else if (type === "login") {
        const response = await axios.post(
          "http://localhost:8000/login.php",
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log(response.data.formD);
        if (response.data.success) {
          // Retrieve unique_id
          const matricNumber = response.data.matric_number;

          // Encrypt the unique_id
          const encryptedMatricNumber = CryptoJS.AES.encrypt(
            matricNumber,
            secretKey
          ).toString();

          // Store encrypted unique_id in local storage
          localStorage.setItem("student", encryptedMatricNumber);
          // Prompt the user to close the login window
          alert("You are now logged in");

          const encryptedStatus = localStorage.getItem("status");

          const decryptedStatus = CryptoJS.AES.decrypt(
            encryptedStatus,
            secretKey
          );

          
          const status = decryptedStatus.toString(CryptoJS.enc.Utf8);

          if (status === "paid") {
            router.replace("/home");
          } else {
            router.replace("/payment");
          }

          
        } else {
          alert(response.data.message);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className={`font-sans pt-[80px] ${classes.wrapper}`}
      style={{ backgroundImage: `url(${ImageCollection.banner})` }}
    >
      <Paper className={classes.form} radius={0} p={30}>
        <Title
          order={2}
          className={`font-sans ${classes.title}`}
          ta="center"
          mt="md"
          mb={50}
        >
          {upperFirst(type)} to get access to your dashboard
        </Title>

        <form onSubmit={handleSubmit}>
          {type === "register" && (
            <TextInput
              label="Full name"
              placeholder="Jeffrey Benson"
              size="sm"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          )}

          {type === "login" && (
            <TextInput
              label="Matric Number"
              placeholder="U2024001"
              size="sm"
              name="matricNumber"
              value={formData.matricNumber}
              onChange={handleInputChange}
              required
            />
          )}

          {type === "register" && (
            <Select
              label="Select your Faculty"
              placeholder="Faculty"
              data={faculties.map((faculty) => faculty.name)}
              mt="md"
              size="sm"
              name="faculty"
              value={formData.faculty}
              onChange={(value) => handleSelectChange("faculty", value)}
              required
              checkIconPosition="right"
            />
          )}

          {type === "register" && (
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
          )}

          {type === "register" && (
            <Select
              label="Department"
              placeholder="Select your Department"
              data={departments}
              mt="md"
              size="sm"
              name="department"
              value={formData.department}
              onChange={(value) => handleSelectChange("department", value)}
              required
              disabled={departmentDisabled}
              checkIconPosition="right"
            />
          )}

          <TextInput
            label="Password"
            placeholder="123456abx"
            size="sm"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            mt={`md`}
          />

          <Group justify="space-between" mt={`4rem`}>
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>

            <Button
              type="submit"
              size="md"
              className="bg-primary rounded-lg border-2 hover:border-primary hover:bg-transparent hover:text-primary transition duration-300"
            >
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}
