import React from "react";
import { Button, Card, Container, Text, TextInput } from "@mantine/core";
import { router } from "expo-router";
import CryptoJS from "crypto-js";


const PaymentPage = () => {
  const secretKey =
    "21d1f43eee6a5780499e81575231952e7dd1f88274f72f6d0f78ffe213944aa9";
  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment processing
    alert("Payment successful");

    const status = CryptoJS.AES.encrypt("paid", secretKey).toString();

    localStorage.setItem("status", status);

    router.replace("/home");
  };

  return (
    <form onSubmit={handlePayment}>
      <Card shadow="xs" padding="lg" className="flex flex-col space-y-4">
        <Text size="xl" align="center" style={{ marginBottom: "1rem" }}>
          Debit Card Payment
        </Text>
        <TextInput
          label="Card Number"
          placeholder="Enter card number"
          required
        />
        <TextInput
          label="Cardholder Name"
          placeholder="Enter cardholder name"
          required
        />
        <TextInput label="Expiration Date" placeholder="MM/YY" required />
        <TextInput label="CVV" placeholder="Enter CVV" required />
        <button
          className="p-2 w-full bg-primary my-12 rounded-lg text-white hover:bg-transparent transition duration-300 hover:text-black border-2 hover:border-primary"
          type="submit"
        >
          Pay
        </button>
      </Card>
    </form>
  );
};

export default PaymentPage;
