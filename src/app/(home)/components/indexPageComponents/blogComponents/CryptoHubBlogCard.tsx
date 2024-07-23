// BlogCard.jsx
import Image from "next/image";
import React, {FC} from "react";

interface Props {
  image: string;
  date: string;
  author: string;
  title: string;
  description: string;
}

const CryptoHubBlogCard: FC<Props> = ({
  image,
  date,
  author,
  title,
  description,
}) => {
  return (
    <div className="bg-light dark:bg-secondary-dark dark:bg-opacity-15 rounded-lg shadow-md">
      <div className="relative w-full aspect-square">
        <Image src={image} alt={title} fill className="rounded-lg mb-6" />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <p className="text-primary text-opacity-70 text-sm font-semibold">
          {date} | By {author}
        </p>
        <h3 className="text-dark dark:text-light text-xl font-semibold">
          {title}
        </h3>
        <p className="text-dark dark:text-light text-opacity-40 dark:text-opacity-30 text-sm">
          {description}
        </p>
        <a
          href="#"
          className="text-primary text-opacity-70 font-semibold hover:scale-90"
        >
          READ MORE &rarr;
        </a>
      </div>
    </div>
  );
};

export default CryptoHubBlogCard;
