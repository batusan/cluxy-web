"use client";
import useOnScreen from "@/hooks/useOnScreen";
import { useRef } from "react";
import SpecialItem from "./specials/specialtem";

export default function SpecialSection() {
  // Ref for the element that we want to detect whether on screen
  const ref = useRef();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  const onScreen = useOnScreen(ref, "-100px");
  return (
    <div
      ref={ref}
      className={`text-white mt-24 flex flex-col justify-center xl:w-[60vw] opacity-0 ${
        onScreen ? "fade" : ""
      }`}
    >
      <h3 className="text-sm text-center text-[#395cf3]">Features</h3>
      <h1 className="text-4xl px-4 text-center mt-12">
        What makes <span className="cluxy-text-hero">Cluxy</span> so special ?
      </h1>
      <div className="mt-24 lg:mt-32 flex flex-wrap">
        <SpecialItem title="Save time & resources" />
        <SpecialItem title="Easy to customize" />
        <SpecialItem title="Clean & organized" />
        <SpecialItem title="Professional & credible" />
      </div>
    </div>
  );
}
