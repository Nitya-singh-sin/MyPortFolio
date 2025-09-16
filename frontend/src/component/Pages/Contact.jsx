import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
    } else {
      alert("Error sending message. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
};


  return (
    <section
      id="contact"
      className="w-full bg-gray-900 text-white min-h-screen flex flex-col justify-center px-4 md:px-20"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16">
        Get{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
          In Touch
        </span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl w-full mx-auto grid md:grid-cols-2 gap-8 bg-gray-800 rounded-3xl shadow-2xl p-8"
      >
        {/* First Name */}
        <div className="flex flex-col">
          <label className="text-cyan-300 font-medium mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your first name"
            required
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label className="text-cyan-300 font-medium mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your last name"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-cyan-300 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col">
          <label className="text-cyan-300 font-medium mb-2">Mobile No</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your mobile number"
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-cyan-300 font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-white font-bold px-8 py-3 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
