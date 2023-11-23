import Agrify from "@/components/assets/logo/agrify-filled-logo";
import React from "react";

const Advise = () => {
  return (
    <section className="w-full h-screen py-[86px] flex flex-row justify-center">
      <div className="w-full max-w-[858px] px-8 py-16 flex flex-col items-center">

        <div className="w-full flex flex-col justify-center items-center mb-[10rem]">
          <Agrify />
          <p className="mt-[24px]">How can I help you today?</p>
        </div>

        <form className="flex flex-row space-x-[16px]">
          <input className="border-[1px] h-min" type="text" />
          <button>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Advise;
