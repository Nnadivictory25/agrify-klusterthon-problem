'use client'

import Agrify from "@/components/assets/logo/agrify-filled-logo";
import SendArrow from "@/components/assets/misc/send-arrow";
import React from "react";

const Advise = () => {
  return (
    <section className="w-full h-screen py-[86px] flex flex-row justify-center">
      <div className="w-full max-w-[858px] px-8 py-16 flex flex-col items-center">
        <div className="w-full flex flex-col justify-center items-center mb-[10rem]">
          <Agrify />
          <p className="mt-[24px]">How can I help you today?</p>
        </div>

        <form className="w-full flex flex-row space-x-[16px] justify-center px-5">
          <div className="flex flex-row space-x-[16px] border-gray-200 focus:border-gray-400 border-[1px] w-full  pr-[20px] rounded-[20px]">
            <textarea className="grid place-items-center w-full py-[8px] px-[16px] rounded-[20px] text-[16px] overflow-y-auto chat" placeholder="Ask anything..." rows={1} />
            <button><SendArrow /></button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Advise;
