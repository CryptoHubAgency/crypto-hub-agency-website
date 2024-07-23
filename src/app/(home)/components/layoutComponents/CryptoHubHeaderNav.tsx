"use client";

import CryptoHubMaxWidth from "@/components/CryptoHubMaxWidth";
import classNames from "classnames";
import {FC, useEffect, useState} from "react";
import CryptoHubDesktopNav from "./CryptoHubDesktopNav";
import CryptoHubMobileNav from "./CryptoHubMobileNav";

interface Props {}

const CryptoHubHeaderNav: FC<Props> = (props): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={classNames("z-[10] transition-all relative bg-light dark:bg-dark", {
        "sticky top-0 bg-light dark:bg-dark border-b border-primary border-opacity-25 pb-4":
          isScrolled,
      })}
    >
      <CryptoHubMaxWidth>
        <CryptoHubDesktopNav />
        <CryptoHubMobileNav />
      </CryptoHubMaxWidth>
    </header>
  );
};

export default CryptoHubHeaderNav;
