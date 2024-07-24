import CryptoHubLogo from "@/components/CryptoHubLogo";
import React from "react";

const CryptoHubFooter = () => {
  return (
    <footer className="bg-secondary-light dark:bg-secondary-dark bg-opacity-10 dark:bg-opacity-15 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <CryptoHubLogo />
          </div>
          <div className="flex flex-wrap md:flex-row gap-8 md:space-y-0 md:mb-0 text-dark dark:text-light">
            <div>
              <h3 className="font-semibold mb-4">What is ico</h3>
              <ul>
                <li className="mb-2">
                  <a href="#">Tokens</a>
                </li>
                <li className="mb-2">
                  <a href="#">Roadmap</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">ICO Apps</h3>
              <ul>
                <li className="mb-2">
                  <a href="#">Whitepaper</a>
                </li>
                <li className="mb-2">
                  <a href="#">Teams</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Join Us</h3>
              <ul>
                <li className="mb-2">
                  <a href="#">Contact</a>
                </li>
                <li className="mb-2">
                  <a href="#">Faq</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold mb-4 text-dark dark:text-light">
              Subscribe to our Newsletter
            </h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email Address"
                className="p-2 rounded-l-md bg-light dark:bg-dark text-dark dark:text-light focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="bg-secondary-dark text-light p-2 rounded-r-md font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-primary border-opacity-25 text-dark dark:text-light mt-8 pt-8 text-center md:text-left">
          <p className="text-sm">
            &copy; Crypto Hub Agency all Rights Reserved.{" "}
            <a
              href="https://templatescoder.com"
              className="text-secondary-dark dark:text-secondary-light"
            ></a>
          </p>
          <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-0">
            <div className="space-x-4">
              <a href="#" className="text-sm">
                Terms & Condition
              </a>
              <span className="text-secondary-dark dark:text-secondary-light">
                |
              </span>
              <a href="#" className="text-sm">
                Privacy Policy
              </a>
              <span className="text-secondary-dark dark:text-secondary-light">
                |
              </span>
              <a href="#" className="text-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CryptoHubFooter;
