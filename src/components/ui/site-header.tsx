import React from "react";
import Framwise from "../assets/logo/farmwise-logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full px-[3%] py-[21px]">
      <div className="px-[60px] flex flex-row items-center wrapper">
        <div className="grid place-items-center">
          <Link className="flex flex-row items-center navlink space-x-[24px]" href="/">
            <Framwise />
            <p>Agrify</p>
          </Link>
        </div>
        <nav className="my-0 mx-auto">
          <ul className="flex flex-row justify-evenly">
            <li className="navlink">
              <Link href="/">Home</Link>
            </li>
            <li className="navlink">
              <Link href="/take-advise">Take Advise</Link>
            </li>
            <li className="navlink">
              <Link target="_blank" href="https://www.kluster.africa/">Kluster</Link>
            </li>
            <li className="navlink">
              <Link target="_blank" href="https://www.kluster.africa/klusterthon">Klusterthon</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
