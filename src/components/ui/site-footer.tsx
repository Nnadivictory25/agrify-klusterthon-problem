import React from "react";
import CurlyLine from "../assets/misc/curly-line";

const Footer = () => {
  return (
    <footer className="w-full h-[50px] bg-[var(--nav-color)] flex flex-row justify-between items-center text-white px-14 text-[14px] leading-[20px]">
      <p>@Agrify312</p>
      <div className="flex flex-row items-center space-x-[8px]">
        <CurlyLine fill="white" />
        <p>Klusterthon, by Stutern proffering solutions to top business problem statements.</p>
      </div>

      <p>Making farming easy</p>
    </footer>
  );
};

export default Footer;
