"use client";

import Agrify from "@/components/assets/logo/agrify-filled-logo";
import SendArrow from "@/components/assets/misc/send-arrow";
import useAutosizeTextArea from "@/lib/hooks/useAutoSizeTextArea";
import React, { useRef } from "react";
import { useChat } from "ai/react";
import { Message } from "ai";

const Advise = () => {
  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, input);

  console.log(messages);

  return (
    <section className="w-full mt-[50px] flex flex-row justify-center">
      <div className="w-full max-w-[960px] px-8 pb-16 pt-0 flex flex-col items-center">
        <div className="w-full h-[400px] max-h-[400px] flex flex-col justify-start  mb-[1.95rem] border-[1px] p-8 border-gray-200 overflow-y-auto  rounded-[20px] scroll-none">
          {!messages.length ? (
            <div className="relative w-full h-full flex flex-row justify-center items-center">
              <div className="flex flex-col items-center space-y-8">
                <Agrify />
                <p className="mt-[16px] text-sm max-w-[70%] text-center text-[var(--nav-color)]">
                  I am Agrify, your go-to
                  solution harnessing the power of AI to revolutionize farming.
                  I'm here to empower you, the farmers, with expert guidance on
                  crop management, market trends, and instant solutions. Let's
                  cultivate success together!
                </p>
              </div>

              <div className="text-[var(--nav-color)] flex w-max max-w-[65%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-[var(--muted)] mb-[15px] leading-5 absolute top-0 left-0">
                How can I help you today?
              </div>
            </div>
          ) : (
            messages.map(({ content, role, id }) =>
              role === "user" ? (
                <div
                  key={id}
                  style={{ alignSelf: "flex-end" }}
                  className="text-white flex w-max max-w-[65%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-[var(--nav-color)] mb-[15px]"
                >
                  {content}
                </div>
              ) : (
                <div
                  key={id}
                  style={{ alignSelf: "flex-start" }}
                  className="text-[var(--nav-color)] flex w-max max-w-[65%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-[var(--muted)] mb-[15px] leading-5"
                >
                  {content}
                </div>
              )
            )
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-row space-x-[16px] justify-center px-5"
        >
          <div className="flex flex-row items-center space-x-[16px] border-gray-200 focus:border-gray-400 border-[1px] w-full py-[6px] pl-[6px] pr-[20px] rounded-[20px]">
            <textarea
              ref={textAreaRef}
              onChange={handleInputChange}
              className="w-full py-[8px] px-[16px] rounded-[20px] text-[16px] overflow-y-auto chat max-h-[125px]"
              placeholder="Ask me anything related to farming, and let's cultivate success together..."
              value={input}
              rows={1}
            />
            <button type="submit">
              <SendArrow />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Advise;
