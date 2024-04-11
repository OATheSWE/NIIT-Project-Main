import { Text, Box, Stack, rem } from "@mantine/core";
import classes from "./ContactInfo.module.css";
import { IconImports } from "../../../assets";

function ContactIcon({ icon, title, description, ...others }) {
  return (
    <div className={`shadow-2xl ${classes.wrapper}`} {...others}>
      <div className="flex w-[50px] h-[50px] justify-center items-center mr-5 bg-accent rounded-lg">
        {icon}
      </div>
      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  {
    title: "Email",
    description: "info@topangels-disbury.com.ng",
    icon: <IconImports.Email size={25} color={`#FF3E54`} />,
  },
  {
    title: "Phone",
    description: "+234 907 820 4521",
    icon: <IconImports.Phone size={25} color={`#FF3E54`} />,
  },
  {
    title: "Address",
    description: "4-6 Odutayo/Nnobi Street",
    icon: <IconImports.Location size={25} color={`#FF3E54`} />,
  },
  {
    title: "Working hours",
    description: "9am - 5pm, Mon - Fri",
    icon: <IconImports.Sun size={25} color={`#FF3E54`} />,
  },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
