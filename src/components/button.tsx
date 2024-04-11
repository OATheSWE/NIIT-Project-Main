import React, { FunctionComponent } from "react";
import { Button } from "@mantine/core";
import "./button.css"

interface BtnProps {
  click?: () => void;
  text: string;
  style?: any;
  icon?: any;
}

const Btn: FunctionComponent<BtnProps> = ({ click, text, style, icon}) => {
  const [isButtonPressed, setIsButtonPressed] = React.useState(false);

  return (
      <Button
        className={`border-0 transition duration-300 whitespace-pre-wrap ${style}`}
        leftSection={icon}
        onClick={click}
      >
        {text}
      </Button>
  );
};

export default Btn;
