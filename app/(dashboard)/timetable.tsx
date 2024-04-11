import React from "react";
import { styles } from "../../src/data";
import { TimetablePage } from "../../src/views";


const Timetable = () => {
  return (
    <div className={`${styles.body} mt-[100px]`}>
      <TimetablePage />
    </div>
  );
};

export default Timetable;
