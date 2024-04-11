import { Slot } from "expo-router";
import '@mantine/dates/styles.css';
import { AsideBar } from "../../src/components";

const App = () => {
  return (
    <div>
      <AsideBar />
      <Slot />
    </div>
  );
};

export default App;
