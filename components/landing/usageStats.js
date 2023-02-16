"use client";
import useOnScreen from "@/hooks/useOnScreen";
import { useRef } from "react";

export default function UsageStats() {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px");
  return (
    <div
      ref={ref}
      className={`text-white px-4 mt-24 h-full w-full flex flex-col items-center opacity-0 ${
        onScreen ? "fade" : ""
      }`}
    >
      <div className="text-4xl">Usage statistics</div>
      <div className="bg-[#1b1d2277] w-[80vw] lg:w-[60vw] mt-12 p-4 rounded-lg flex flex-col gap-4 flex-wrap ">
        <div className="p-4">
          <div>TOTAL USERS</div>
          <div>6,8K</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="bg-[#040406] p-4 rounded-lg w-full">
            <div>ACTIVE GUILDS</div>
            <div>953</div>
          </div>
          <div className="bg-[#040406] p-4 rounded-lg w-full  lg:justify-self-end">
            <div>ACTIVE CHANNELS</div>
            <div>425</div>
          </div>
          <div className="bg-[#040406] p-4 rounded-lg w-full ">
            <div>GAME SUPPORTED</div>
            <div>246</div>
          </div>
          <div className="bg-[#040406] p-4 rounded-lg w-full  lg:justify-self-end">
            <div>ACTIVE MESSAGES</div>
            <div>2345</div>
          </div>
        </div>
      </div>
    </div>
  );
}
