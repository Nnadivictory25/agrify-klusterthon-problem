import React from "react";
import Framwise from "../assets/logo/farmwise-logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full px-[3%] py-[20px]">
      <div className="px-[60px] flex flex-row wrapper">
        <div className="pr-[24px] grid place-items-center">
          <Link href="/">
            <Framwise />
          </Link>
        </div>
        <nav>
          <ul className="flex flex-row justify-evenly">
            <li className="navlink">
              <Link href="/">Take Advise</Link>
            </li>
            <li className="navlink">
              <Link href="/">Klusterthon</Link>
            </li>
            <li className="navlink">
              <Link href="/">About</Link>
            </li>
            <li className="navlink">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
