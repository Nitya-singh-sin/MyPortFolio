// src/components/PhoneButton.jsx
import React from "react";
import { FaPhone } from "react-icons/fa";

const PhoneButton = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href="tel:+911234567890" // apna phone number
        className="bg-blue-500 p-4 rounded-full shadow-lg flex items-center justify-center text-white text-2xl transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
        title="Call Me"
      >
        <FaPhone />
      </a>
    </div>
  );
};

export default PhoneButton;
