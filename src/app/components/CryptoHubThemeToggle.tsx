"use client";

import classNames from "classnames";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {RiSunFill, RiMoonFill} from "react-icons/ri";

const CryptoHubThemeToggle = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-fit flex items-center px-2 rounded-full bg-white dark:bg-opacity-10 gap-2">
      <button
        onClick={() => setTheme("light")}
        className={classNames(
          "w-6 lg:w-8 aspect-square rounded-full flex p-1 items-center justify-center",
          {
            "bg-primary text-white": theme === "light",
            "text-gray-300": theme !== "light",
          }
        )}
      >
        <RiSunFill className="text-xs lg:text-xl" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={classNames(
          "w-6 lg:w-8 aspect-square rounded-full flex p-1 items-center justify-center",
          {
            "bg-primary text-white": theme === "dark",
            "text-gray-500": theme !== "dark",
          }
        )}
      >
        <RiMoonFill className="text-xs lg:text-xl" />
      </button>
    </div>
  );
};

export default CryptoHubThemeToggle;
