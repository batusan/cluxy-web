"use client";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import useOnScreen from "@/hooks/useOnScreen";
import { useRef } from "react";

export default function CommandsWrapper() {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px");

  return (
    <div
      ref={ref}
      className={`flex flex-col h-full w-full px-8 md:px-12 xl:px-48 opacity-0 ${
        onScreen ? "fade" : ""
      }`}
    >
      <LeftMenu />
      <RightMenu />
    </div>
  );
}
