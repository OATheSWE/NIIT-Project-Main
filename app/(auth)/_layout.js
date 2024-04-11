import { Slot } from "expo-router";
import { NavBar2 } from "../../src/components";

const App = () => {
  return (
    <div>
      <NavBar2 />
      <Slot />
    </div>
  );
};

export default App;
