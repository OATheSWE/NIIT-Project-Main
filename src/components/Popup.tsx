// import {
//   Button,
//   Center,
//   Modal,
//   Select,
// } from "@mantine/core";
// import * as React from "react";
// // @ts-ignore
// import classes from "./Popup.module.css";
// // import { subjects } from "../data";

// // Function to render a specific page
// const Popup = ({ opened, onClose }: any) => {
//   return (
//     <Modal.Root
//       opened={opened}
//       onClose={onClose}
//       classNames={{
//         inner: classes.inner,
//         content: classes.content,
//         title: classes.title,
//       }}
//       className="font-poppins"
//     >
//       <Modal.Overlay />
//       <Modal.Content>
//         <Modal.Header className="flex justify-center">
//           <Modal.Title className="font-bold text-[20px]">Create Exam</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Select
//             label="Select your subject"
//             placeholder="Subject"
//             data={subjects}
//             mt="md"
//             size="md"
//             clearable
//           />
//           <Select
//             label="Select your class"
//             placeholder="Class"
//             data={["JSS1", "JSS2", "SS1"]}
//             mt="md"
//             size="md"
//             clearable
//           />
//           <Select
//             label="Select your arm"
//             placeholder="Arm"
//             data={["JSS1", "JSS2", "SS1"]}
//             mt="md"
//             size="md"
//             clearable
//           />
//           <Center className={`mx-auto mt-5`}>
//             <Button
//               size="md"
//               className="bg-blue-700 rounded-lg hover:bg-gray-700 transition duration-300"
//             >
//               Create
//             </Button>
//           </Center>
//         </Modal.Body>
//       </Modal.Content>
//     </Modal.Root>
//   );
// };

// export default Popup;
