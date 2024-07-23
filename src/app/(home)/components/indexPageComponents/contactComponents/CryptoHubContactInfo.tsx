// ContactInfo.jsx
import React from "react";

const CryptoHubContactInfo = () => {
  return (
    <div className="text-white w-full">
      <h2 className="text-lg font-semibold text-primary text-opacity-70 mb-4">
        CONTACT US
      </h2>
      <h1 className="text-3xl font-bold mb-6 text-dark dark:text-light">
        {"Let's talk about your project."}
      </h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="w-2/3">
          <h2 className="text-dark dark:text-light font-semibold mb-4">
            Our Location
          </h2>
          <p className="text-dark dark:text-light text-opacity-40 dark:text-opacity-30">
            401 Broadway, 24th Floor, Orchard Cloud View, London
          </p>
        </div>
        <div className="w-2/3">
          <h2 className="text-dark dark:text-light font-semibold mb-4">
            Phone Number
          </h2>
          <p className="text-dark dark:text-light text-opacity-40 dark:text-opacity-30">
            +990 846 73644
          </p>
          <p className="text-dark dark:text-light text-opacity-40 dark:text-opacity-30">
            +550 9475 4543
          </p>
        </div>
        <div className="w-2/3">
          <h2 className="text-dark dark:text-light font-semibold mb-4">
            Email Address
          </h2>
          <p className="text-dark dark:text-light text-opacity-40 dark:text-opacity-30">
            info@yourdomain.com
          </p>
          <p className="text-dark dark:text-light text-opacity-40 dark:text-opacity-30">
            contact@yourdomain.com
          </p>
        </div>
        <div className="w-2/3">
          <h2 className="text-dark dark:text-light font-semibold mb-4">
            How Can We Help?
          </h2>
          <p className="text-dark dark:text-light text-opacity-40 dark:text-opacity-30">
            Tell us your problem we will get back to you ASAP.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoHubContactInfo;
