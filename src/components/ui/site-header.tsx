import React from "react";
import Framwise from "../assets/logo/farmwise-logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full pt-6 sm:px-[60px] px-10 ">
      <div className="flex flex-row items-center wrapper justify-between">
        <div className="">
          <Link className="flex items-center navlink space-x-2" href="/">
            <Framwise />
            <p>Agrify</p>
          </Link>
        </div>
        <nav className="my-0 mx-auto">
          <ul className="flex items-center gap-x-6">
            <li className="navlink hidden sm:block">
              <Link href="/">Home</Link>
            </li>
            <li className="navlink">
              <Link href="/ask-ai">Ask AI</Link>
            </li>
            <li className="navlink hidden sm:block">
              <Link target="_blank" href="https://www.kluster.africa/">Kluster</Link>
            </li>
            <li className="navlink hidden sm:block">
              <Link target="_blank" href="https://www.kluster.africa/klusterthon">Klusterthon</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
