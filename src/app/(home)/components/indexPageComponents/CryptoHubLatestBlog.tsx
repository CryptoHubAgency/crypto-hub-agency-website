// BlogSection.jsx
import React from "react";
import CryptoHubBlogCard from "./blogComponents/CryptoHubBlogCard";
import CryptoHubMaxWidth from "@/components/CryptoHubMaxWidth";

const CryptoHubLatestBlog = () => {
  const blogs = [
    {
      image: "https://via.placeholder.com/130",
      date: "Jan 17, 2022",
      author: "Jones",
      title: "Honoring Black History Month With Toddlers",
      description:
        "Lorem Ipsum is simply dummy text of the printing and industry...",
    },
    {
      image: "https://via.placeholder.com/130",
      date: "Jan 17, 2022",
      author: "Jones",
      title: "Honoring Black History Month With Toddlers",
      description:
        "Lorem Ipsum is simply dummy text of the printing and industry...",
    },
    {
      image: "https://via.placeholder.com/130",
      date: "Jan 17, 2022",
      author: "Jones",
      title: "Honoring Black History Month With Toddlers",
      description:
        "Lorem Ipsum is simply dummy text of the printing and industry...",
    },
  ];

  return (
    <section className="relative lg:overflow-hidden w-full h-full bg-white dark:bg-inherit dark:border-b dark:border-primary dark:border-opacity-25">
      <CryptoHubMaxWidth className="relative flex flex-col gap-4   lg:gap-8 pt-10 pb-[2rem] lg:pb-16 px-5 lg:px-[5rem] 2xl:px-[8.25rem] items-center justify-center">
        <div className="flex gap-4 items-center w-full">
          <div className="hidden lg:flex w-8 h-0 border-2 border-primary border-opacity-70" />
          <h3 className="text-lg font-semibold text-primary text-opacity-70">
            BLOG
          </h3>
        </div>
        <div>
          <div className="flex justify-between items-baseline">
            <h1 className="text-lg lg:text-2xl text-dark dark:text-light font-bold mb-4 lg:mb-8">
              Read Our Blog
            </h1>
            <a
              href="#"
              className="text-sm lg:text-lg font-semibold text-primary text-opacity-70 hover:scale-90"
            >
              View All
              <span className="ml-4">&rarr;</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <CryptoHubBlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </CryptoHubMaxWidth>
    </section>
  );
};

export default CryptoHubLatestBlog;
