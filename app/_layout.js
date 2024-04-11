import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Slot } from "expo-router";
import "../global.css";
import '@mantine/carousel/styles.css';
import { NavBar } from "../src/components";

const App = () => {
  return (
    <MantineProvider>
      {/* <NavBar /> */}
      <Slot />
    </MantineProvider>
  );
};

export default App;
