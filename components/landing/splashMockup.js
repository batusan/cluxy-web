"use client";

import { useRef } from "react";
import useOnScreen from "@/hooks/useOnScreen";
import Mockup from "../shared/svg/mockup";

export default function SplashImage() {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px");

  return (
    <div
      ref={ref}
      className={`h-72 w-[95vw] lg:h-[60vh] lg:w-[70vw] self-center p-1 opacity-0 ${
        onScreen ? "fade" : ""
      }`}
    >
      <div className="flex h-full w-full rounded-2xl items-center justify-center bg-black relative">
        <Mockup />
      </div>
    </div>
  );
}
