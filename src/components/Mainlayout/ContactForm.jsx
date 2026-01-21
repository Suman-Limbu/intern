import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-400  to-green-300 rounded-lg mt-20">
        <div className="container mx-auto px-80 py-12">
          <form className="bg-white rounded-lg">
            <div className="flex flex-col px-4 ">
              <div>
                <h1 className="text-3xl text-blue-600 font-bold">Contact Us</h1>
              </div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-400 rounded-md"
              />
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-gray-400 rounded-md"
              />
              <label>Phone number</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-gray-400 rounded-md"
              />
              <label>Message</label>
              <input
                type="text"
                placeholder="Enter your message"
                className="border border-gray-400 rounded-md"
              />
              <select>
                <option value="">Select Country </option>
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
                <option value="America">America </option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
