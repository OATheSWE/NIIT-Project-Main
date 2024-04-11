import React from "react";
import { styles } from "../../src/data";
import { PaymentPage } from "../../src/views";


const Payment = () => {
  return (
    <div className={`${styles.body} mt-[100px]`}>
      <PaymentPage />
    </div>
  );
};

export default Payment;
