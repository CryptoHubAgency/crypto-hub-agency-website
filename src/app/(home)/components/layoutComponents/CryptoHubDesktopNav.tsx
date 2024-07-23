import CryptoHubThemeToggle from "@/app/components/CryptoHubThemeToggle";
import CryptoHubLogo from "@/components/CryptoHubLogo";
import {headerLinks} from "@/utils/paths";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FC} from "react";

interface Props {}

const CryptoHubDesktopNav: FC<Props> = (props): JSX.Element => {
  const path = usePathname();

  console.log(path);
  return (
    <>
      <nav className="hidden lg:flex relative items-center flex-1 justify-between bg-transparent mx-4 pt-4">
        <Link href={"/"}>
          <CryptoHubLogo />
        </Link>
        <ul className="flex gap-6 text-lg font-semibold text-gray-500">
          {headerLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-4">
          <CryptoHubThemeToggle />
          <button className="border border-gray-500 p-2 rounded-full px-4 text-black dark:text-white">
            Sign In
          </button>
        </div>
      </nav>
    </>
  );
};

export default CryptoHubDesktopNav;
