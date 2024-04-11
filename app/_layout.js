import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "../global.css";
import { Slot} from 'expo-router'



const App = () => {
  return (
    <MantineProvider>
       <Slot />
    </MantineProvider>
  );
};

export default App;
