import React from "react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        We would love to hear from you. Please submit a message using the contact form below, and we will get back to you as soon as possible.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md outline-none focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded-md outline-none focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Subject</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md outline-none focus:border-blue-500"
            placeholder="Enter subject"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded-md outline-none focus:border-blue-500"
            placeholder="Write your message..."
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold p-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact
