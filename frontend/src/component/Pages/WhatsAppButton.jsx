// src/components/WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890" // apna WhatsApp number daalein (country code ke saath)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center text-2xl z-50 transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
