// ContactUs.jsx
import React from "react";
import CryptoHubContactInfo from "./contactComponents/CryptoHubContactInfo";
import CryptoHubContactForm from "./contactComponents/CryptoHubContactForm";
import CryptoHubMaxWidth from "@/components/CryptoHubMaxWidth";

const CryptoHubContactUs = () => {
  return (
    <section className="relative lg:overflow-hidden w-full h-full">
      <CryptoHubMaxWidth className="relative flex flex-col lg:flex-row gap-8 lg:gap-8 lg:pt-20 pb-[2rem] lg:pb-16 px-5 lg:px-[5rem] 2xl:px-[8.25rem] items-center justify-center ">
        <div className="w-full lg:w-[60%]">
          <CryptoHubContactInfo />
        </div>
        <div className="w-full lg:w-[40%]">
          <CryptoHubContactForm />
        </div>
      </CryptoHubMaxWidth>
    </section>
  );
};

export default CryptoHubContactUs;
