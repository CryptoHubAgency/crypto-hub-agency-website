import CryptoHubThemeToggle from "@/app/components/CryptoHubThemeToggle";
import CryptoHubLogo from "@/components/CryptoHubLogo";
import {headerLinks} from "@/utils/paths";
import Link from "next/link";
import {FC, useEffect} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {FiMenu} from "react-icons/fi";
import {useToggle} from "usehooks-ts";

interface Props {}

const CryptoHubMobileNav: FC<Props> = (props): JSX.Element => {
  const [menuOpen, toggleMenu] = useToggle(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (menuOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "";
      }
    }

    return () => {
      if (body) body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="lg:hidden">
      <div className="flex justify-between px-5 pt-6 pb-4 text-primary">
        <Link href={"/"}>
          <CryptoHubLogo />
        </Link>
        <div className="flex gap-4">
          <CryptoHubThemeToggle />

          <button
            title="mobile-menu-button"
            onClick={() => toggleMenu()}
            className="text-primary dark:text-white"
          >
            {menuOpen ? <AiOutlineClose size={25} /> : <FiMenu size={25} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="absolute flex-col font-semibold transition lg:hidden bg-white text-primary w-fit right-4 px-8 rounded-md z-50">
          <ul className="flex flex-col gap-4 py-4">
            {headerLinks.map((link) => (
              <li
                key={link.title}
                className="hover:underline"
                onClick={toggleMenu}
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default CryptoHubMobileNav;
