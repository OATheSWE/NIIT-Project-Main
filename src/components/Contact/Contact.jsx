import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  Center,
  Title,
} from "@mantine/core";
import classes from "./Contact.module.css";
import { styles } from "../../data";
import { ContactIconsList } from "./ContactIcons";
import emailjs from "@emailjs/browser";
import React from "react";
import { useForm } from "@mantine/form";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { ImageCollection } from "../../../assets";

export default function Contact() {
  const [msg, setMsg] = React.useState();
  const formD = React.useRef();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  const SendEmail = (e) => {
    e.preventDefault();

    // If all fields are filled, use Mantine's validation
    if (!form.isValid) {
      // Show validation errors and return without sending email
      setMsg(1);
      return;
    }

    emailjs
      .sendForm(
        "service_m6zx21i",
        "template_p6j39je",
        formD.current,
        "NEU4CiheQdvnO1sPi",
        form.values.email
      )
      .then(
        (result) => {
          console.log(result.text);
          setMsg(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
          setMsg(false);
        } 
      );
  };

  return (
    <Paper ref={ref} className={`w-full py-10 relative mt-10 ${styles.body}`}>
      <div className={classes.wrapper}>
        <animated.div style={leftColAnimation}>
          <div className={classes.contacts}>
            <ContactIconsList />
          </div>
        </animated.div>

        <form
          className={`md:ml-8 ${classes.form}`}
          onSubmit={SendEmail}
          ref={formD}
        >
          <animated.div style={rightColAnimation}>
            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput
                  label="Your name"
                  placeholder="Your name"
                  name="name"
                  {...form.getInputProps("name")}
                  required
                  className="shadow-2xl"
                />
                <TextInput
                  label="Your email"
                  placeholder="hello@123.dev"
                  name="email"
                  required
                  {...form.getInputProps("email")}
                  className="shadow-2xl"
                />
              </SimpleGrid>

              <TextInput
                mt="md"
                label="Subject"
                placeholder="Subject"
                name="subject"
                required
                {...form.getInputProps("subject")}
                className="shadow-2xl"
              />

              <Textarea
                mt="md"
                label="Your message"
                name="message"
                placeholder="Please include all relevant information"
                minRows={3}
                {...form.getInputProps("message")}
                className="shadow-2xl"
              />

              <Group justify="center">
                <input
                  type="submit"
                  value="Send Now"
                  className="bg-primary rounded-md hover:bg-secondary mt-[20px] px-4 py-2.5 text-[16px] transition duration-300 text-white cursor-pointer shadow-2xl"
                />
              </Group>
            </div>
            {/* Display the text if the form has been submitted successfully */}
            {msg === true && (
              <Text className="text-secondary mt-2 text-center">
                Your message has been sent successfully!
              </Text>
            )}

            {msg === 1 && (
              <Text className="text-secondary mt-2 text-center">
                Invalid form input form.
              </Text>
            )}

            {/* Display the text if the form wasnt submitted successfully */}
            {msg === false && (
              <Text className="text-secondary mt-2 text-center">
                Oops! Something went wrong. Please try again later.
              </Text>
            )}
          </animated.div>
        </form>
      </div>
    </Paper>
  );
}
