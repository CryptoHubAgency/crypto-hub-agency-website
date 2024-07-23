// Team.jsx
import CryptoHubMaxWidth from "@/components/CryptoHubMaxWidth";
import Image from "next/image";
import React, {FC} from "react";
import {IconType} from "react-icons";
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube} from "react-icons/fa";

const teamMembers = [
  {
    name: "Matheus Ferrero",
    role: "Marketing Expert",
    imageUrl: "https://via.placeholder.com/128", // Replace with actual image URL
    socialLinks: [
      {url: "#", icon: FaFacebookF},
      {url: "#", icon: FaTwitter},
      {url: "#", icon: FaLinkedinIn},
      {url: "#", icon: FaYoutube},
    ],
  },
  {
    name: "Eva Hudson",
    role: "Blockchain Developer",
    imageUrl: "https://via.placeholder.com/128", // Replace with actual image URL
    socialLinks: [
      {url: "#", icon: FaFacebookF},
      {url: "#", icon: FaTwitter},
      {url: "#", icon: FaLinkedinIn},
      {url: "#", icon: FaYoutube},
    ],
  },
  {
    name: "Jackie Sanders",
    role: "Creative Designer",
    imageUrl: "https://via.placeholder.com/128", // Replace with actual image URL
    socialLinks: [
      {url: "#", icon: FaFacebookF},
      {url: "#", icon: FaTwitter},
      {url: "#", icon: FaLinkedinIn},
      {url: "#", icon: FaYoutube},
    ],
  },
  {
    name: "Jackie Sanders",
    role: "SEO Expert",
    imageUrl: "https://via.placeholder.com/128", // Replace with actual image URL
    socialLinks: [
      {url: "#", icon: FaFacebookF},
      {url: "#", icon: FaTwitter},
      {url: "#", icon: FaLinkedinIn},
      {url: "#", icon: FaYoutube},
    ],
  },
];

const CrytoHubTeam = () => {
  return (
    <section className="relative lg:overflow-hidden w-full h-full bg-secondary-light dark:bg-secondary-dark bg-opacity-10 dark:bg-opacity-15">
      <CryptoHubMaxWidth className="relative flex flex-col lg:flex-row gap-8 lg:gap-8 lg:pt-10 pb-[2rem] lg:pb-16 px-5 lg:px-[5rem] 2xl:px-[8.25rem] items-center justify-center">
        <div className=" p-10">
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <h2 className="text-lg font-semibold text-primary text-opacity-70">
              OUR TEAM
            </h2>
            <h1 className="text-dark dark:text-light text-3xl font-bold mt-2">
              Meet Our Team
            </h1>
            <p className="mt-4 lg:w-1/2 text-dark dark:text-light text-opacity-40 dark:text-opacity-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              congue arcu, In et dignissim quam condimentum vel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </CryptoHubMaxWidth>
    </section>
  );
};

export default CrytoHubTeam;

interface SocialLinksTypes {
  url: string;
  icon: IconType;
}

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  socialLinks: SocialLinksTypes[];
}

const TeamMember: FC<TeamMemberProps> = ({
  name,
  role,
  imageUrl,
  socialLinks,
}) => {
  return (
    <div className="flex flex-col bg-light dark:bg-dark p-3 gap-4 rounded-lg shadow-md dark:shadow-gray-900 text-center hover:border-b-2 hover:border-b-primary">
      <div className="relative w-full aspect-square mx-auto rounded-full">
        <Image src={imageUrl} alt={name} fill className="rounded-lg" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-dark dark:text-light font-semibold">{name}</h3>
        <p className="text-dark dark:text-light text-opacity-40 dark:text-opacity-30 text-xs">
          {role}
        </p>
        <div className="flex justify-center gap-4 mt-2">
          {socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="text-dark dark:text-light text-opacity-40 dark:text-opacity-30 hover:text-opacity-100 dark:hover:text-opacity-100"
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
