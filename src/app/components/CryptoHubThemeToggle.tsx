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
          "w-8 h-8 rounded-full flex p-2 items-center justify-center",
          {
            "bg-primary text-white": theme === "light",
            "text-gray-300": theme !== "light",
          }
        )}
      >
        <RiSunFill size={20} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={classNames(
          "w-8 h-8 rounded-full flex p-2 items-center justify-center",
          {
            "bg-primary text-white": theme === "dark",
            "text-gray-500": theme !== "dark",
          }
        )}
      >
        <RiMoonFill size={20} />
      </button>
    </div>
  );
};

export default CryptoHubThemeToggle;
