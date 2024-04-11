import { Box } from "@mantine/core";
/// @ts-ignore
import { About, Anthem, Apply, Footer, Header, LandingContact, Testimonial, Video } from "../../components";

export default function Landing() {
  

  
  return (
    <div className="relative ">
      <div className="fixed z-10">
        <Header />
      </div>
      <div className="sticky z-[9999] translate-y-[40%] bg-white">
        <Video />
        <About />
        <Apply />
        <Anthem />
        <Testimonial />
        <LandingContact />
        <Footer />
      </div>
    </div>
  );
}
