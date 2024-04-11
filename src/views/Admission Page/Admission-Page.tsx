import { Divider } from "@mantine/core";
import ApplySchool from "./ApplySchool";
import { styles } from "../../data";
import Process from "./Process";

const AdmissionPage = () => {
  return (
    <>
      <ApplySchool />
      <div className={`${styles.body}`}>
        <Divider size="sm" color="#f44336" />
      </div>
      <Process />
    </>
  );
};

export default AdmissionPage;
