// ContactForm.jsx
import React from "react";

const CryptoHubContactForm = () => {
  return (
    <div className="bg-secondary-light dark:bg-secondary-dark bg-opacity-10 dark:bg-opacity-15 p-8 rounded-lg shadow-md w-full">
      <h2 className="text-dark dark:text-light text-2xl font-semibold mb-6">
        Send us a Message
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="name">
            Full Name*
          </label>
          <input
            className="w-full p-3 rounded-lg bg-light dark:bg-dark text-dark dark:text-light focus:outline-none"
            type="text"
            id="name"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="email">
            Email Address*
          </label>
          <input
            className="w-full p-3 rounded-lg bg-light dark:bg-dark text-dark dark:text-light focus:outline-none"
            type="email"
            id="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="message">
            Message*
          </label>
          <textarea
            className="w-full p-3 rounded-lg bg-light dark:bg-dark text-dark dark:text-light focus:outline-none"
            id="message"
            rows={4}
            placeholder="Type your message"
          />
        </div>
        <button
          className="w-full p-3 bg-secondary-dark text-light rounded-lg font-semibold hover:scale-90"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default CryptoHubContactForm;
