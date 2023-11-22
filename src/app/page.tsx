import FeatureOne from "@/components/assets/features/featrue-one";
import CurlyLine from "@/components/assets/misc/curly-line";
import LeftStar from "@/components/assets/misc/left-star";
import RightStar from "@/components/assets/misc/right-star";
import React, { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <section className="w-full flex flex-row justify-center py-[86px]">
        <div className="relative w-full wrapper flex flex-row justify-center">
          <div className="w-[700px] flex flex-col items-center ">
            <p className="mb-[24px] bg-blue-100 border-blue-200 border-[1px] rounded-xl px-[8px] py-[1px] text-sm">
              Harvest Your Dreams
            </p>
            <h1 className="text-center text-[88px] leading-[96px] font-[500] tracking-[-2.5px] mb-[12px]">
              Farming made smart with Agrify
            </h1>
            <p className="text-center text-[20px] leading-[32px] tracking-[-0.3px]">
              Maximize yields, optimize resource allocation and propelling your
              agricultural enterprise to unprecedented efficiency.
            </p>
            <button className="my-[24px] rounded-[44px] bg-[var(--nav-color)] text-white tracking-[-0.2px] py-[8px] px-[24px] text-[16px] font-medium leading-[32px] flex flex-row justify-center items-center hover:bg-gray-900">
              Get started with Agrify
            </button>
            <div className="flex flex-row justify-evenly items-center space-x-[8px]">
              <CurlyLine />
              <p className="text-[12px]">
                Empowering farmers towards sustainable cultivation.
              </p>
            </div>
          </div>

          <LeftStar className="absolute left-[15rem] top-[4rem]" />
          <RightStar className="absolute right-[16.25rem]" />
        </div>
      </section>

      <section className="w-full flex flex-row justify-center mb-[10rem]">
        <div className="wrapper flex flex-row justify-center items-center">
          <section className="w-[858px] flex flex-row flex-wrap justify-between">
            <div className="border-[1px] border-gray-200 p-[24px] space-x-[16px] flex flex-row items-start text-[16px] leading-[32px] rounded-[8px] mb-[24px]">
              <div className="bg-purple-100 rounded-full h-[48px] w-[48px] flex flex-row justify-center items-center">
                <FeatureOne />
              </div>
              <div className="flex flex-col space-y-[4px] max-w-[303px]">
                <p className="font-medium">Increase Your Chances</p>
                <p className="text-gray-600">
                  A well-crafted resume increases chances of your dream job.
                </p>
              </div>
            </div>
            <div className="border-[1px] border-gray-200 p-[24px] space-x-[16px] flex flex-row items-start text-[16px] leading-[32px] rounded-[8px]">
              <div className="bg-purple-100 rounded-full h-[48px] w-[48px] flex flex-row justify-center items-center">
                <FeatureOne />
              </div>
              <div className="flex flex-col space-y-[4px] max-w-[303px]">
                <p className="font-medium">Increase Your Chances</p>
                <p className="text-gray-600">
                  A well-crafted resume increases chances of your dream job.
                </p>
              </div>
            </div>
            <div className="border-[1px] border-gray-200 p-[24px] space-x-[16px] flex flex-row items-start text-[16px] leading-[32px] rounded-[8px]">
              <div className="bg-purple-100 rounded-full h-[48px] w-[48px] flex flex-row justify-center items-center">
                <FeatureOne />
              </div>
              <div className="flex flex-col space-y-[4px] max-w-[303px]">
                <p className="font-medium">Increase Your Chances</p>
                <p className="text-gray-600">
                  A well-crafted resume increases chances of your dream job.
                </p>
              </div>
            </div>
            <div className="border-[1px] border-gray-200 p-[24px] space-x-[16px] flex flex-row items-start text-[16px] leading-[32px] rounded-[8px]">
              <div className="bg-purple-100 rounded-full h-[48px] w-[48px] flex flex-row justify-center items-center">
                <FeatureOne />
              </div>
              <div className="flex flex-col space-y-[4px] max-w-[303px]">
                <p className="font-medium">Increase Your Chances</p>
                <p className="text-gray-600">
                  A well-crafted resume increases chances of your dream job.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
