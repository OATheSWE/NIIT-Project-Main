import React from "react";
import { styles } from "../../src/data";
import { StudentPaid } from "../../src/views";


const home = () => {
  return (
    <div className={`${styles.body} mt-[100px]`}>
      <StudentPaid />
    </div>
  );
};

export default home;
