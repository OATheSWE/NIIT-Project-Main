// Exporting Icons from IconImport.tsx
import { AntDesign, Entypo, Feather, Fontisto  } from "@expo/vector-icons";

const IconImports = {
  Location: (props: any) => <Feather name="map-pin" {...props} />,
  Facebook: (props: any) => <Feather name="facebook"  {...props} />,
  Linkedin: (props: any) => <AntDesign name="linkedin-square"  {...props} />,
  Instagram: (props: any) => <Entypo name="instagram"  {...props} />, 
  Email: (props: any) => <Entypo name="email" {...props} />,
  Phone: (props: any) => <Feather name="phone" {...props} />,
  Sun: (props: any) => <Fontisto name="day-sunny" {...props} />,

};

export { IconImports };