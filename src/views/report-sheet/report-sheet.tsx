/// @ts-nocheck
import {
  Box,
  Button,
  Center,
  Checkbox,
  Grid,
  GridCol,
  Image,
  SimpleGrid,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useRef, useState } from "react";
import {
  childDevelopment,
  comments,
  performanceArray,
  secondarySubjects as defaultSecondarySubjects,
  signature,
  standards,
  styles,
  tableHeaders,
  topInputFields,
} from "../../data";
import { ImageCollection } from "../../../assets";
/// @ts-ignore
import classes from "./report.module.css";
import emailjs from "@emailjs/browser";

// Functional component for rendering the report sheet
const ReportSheet = ({
  logoSrc,
  school,
  section,
  subjects = defaultSecondarySubjects,
}) => {

  const handleClick = () => {
    window.print();
    alert("Student Result Saved");
  };

  return (
    <Box className={`${styles.body} pt-10`}>
      {/* Header Section */}
      <Center className="flex flex-col">
        {/* School Logo */}
        <Image
          src={logoSrc}
          className="max-w-[130px] w-full object-cover"
          alt="School Logo"
        />

        {/* School Name */}
        <Text className="text-[20px] font-bold">{school}</Text>

        {/* Report Sheet Title */}
        <Text className="text-[22px] font-semibold text-center">
          Mid-Term Progress Report Sheet
        </Text>

        {/* Section of the school */}
        <Text className="text-[17px] font-bold">{section}</Text>
      </Center>

      {/* Top Input Fields */}
      <SimpleGrid className="" cols={{ base: 1, sm: 2 }}>
        {topInputFields.map((field) => (
          <TextInput
            label={field.label}
            size="md"
            name={field.name}
            classNames={classes}
            key={field.name}
          />
        ))}
      </SimpleGrid>
      {/* Performance Levels */}
      <SimpleGrid cols={{ base: 1, sm: 3 }} className="mt-5">
        <Text className="font-bold">Performance Levels:</Text>
        {performanceArray.map((item) => {
          return <div key={item.id}>{item.content}</div>;
        })}
      </SimpleGrid>

      {/* Standards Section */}
      <SimpleGrid
        cols={{ base: 1, sm: 4 }}
        verticalSpacing={0}
        spacing={0}
        className="mt-2 mb-3"
      >
        {standards.map((standard, index) => (
          <div
            key={index}
            className={`p-2 border-[1.5px] border-black md:border-r-0 max-md:border-b-0 ${standard.style}`}
          >
            <Text className="font-bold text-[13px]">{standard.title}</Text>
            {standard.descriptions.map((description, i) => (
              <div key={i} className="flex space-x-2">
                <div className="h-1 w-[4px] rounded-[1.5px] bg-black mt-2"></div>
                <Text className="text-[13px]">{description}</Text>
              </div>
            ))}
          </div>
        ))}
      </SimpleGrid>

      {/* Subjects and Evaluation */}
      <Grid gutter={30} className="my-10">
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Table
            verticalSpacing="xs"
            withTableBorder
            withColumnBorders
            classNames={classes}
          >
            <Table.Thead>
              <Table.Tr>
                {tableHeaders.map((header) => (
                  <Table.Th key={header.id} className="text-center">
                    {header.isHTML ? (
                      <div dangerouslySetInnerHTML={{ __html: header.title }} />
                    ) : (
                      header.title
                    )}
                  </Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {subjects.map((subject, index) => (
                <Table.Tr key={index}>
                  <Table.Td>{subject}</Table.Td>
                  {[...Array(7)].map((_, i) => (
                    <Table.Td key={i}>
                      <input className="border-0 outline-0 max-w-14 w-full" />
                    </Table.Td>
                  ))}
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Table
            verticalSpacing="xs"
            withTableBorder
            withColumnBorders
            classNames={classes}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Socio-Element Development</Table.Th>
                <Table.Th></Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {childDevelopment.map((dev) => (
                <Table.Tr key={dev.id}>
                  <Table.Td className={dev.class}>{dev.title}</Table.Td>
                  <Table.Td>
                    <Checkbox
                      variant="outline"
                      className="border-0 outline-0 max-w-14 w-full"
                    />
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Grid.Col>
      </Grid>

      {/* Comments Section */}
      <div className="">
        <Text className="font-bold mb-1">COMMENTS:</Text>
        {comments.map((com) => (
          <div key={com.id} className="mb-2">
            <Text className="">{com.label}</Text>
            <TextInput size="md" name={com.name} classNames={classes} />
          </div>
        ))}
      </div>

      {/* Signature Section */}
      <div className="sm:flex justify-between my-8">
        {signature.map((com) => (
          <div key={com.id} className="mb-2">
            <TextInput size="md" name={com.name} classNames={classes} />
            <Text className="">{com.label}</Text>
          </div>
        ))}
      </div>

      {/* Upload Button Section */}
      <div className="flex items-center justify-center mb-6">
        <Button
          onClick={handleClick}
          className="bg-blue-700 px-7 transition duration-300 hover:bg-black"
        >
          Upload
        </Button>
      </div>
    </Box>
  );
};

export default ReportSheet;
