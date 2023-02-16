"use client";

import { useRef } from "react";
import useOnScreen from "@/hooks/useOnScreen";

export default function SplashImage() {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px");

  return (
    <div
      ref={ref}
      className={`h-72 w-[95vw] lg:h-[60vh] lg:w-[50vw] self-center  bg-gradient-to-r rounded-2xl from-[#395cf3] via-red-500 to-[#ff2d95] p-1 opacity-0 ${
        onScreen ? "fade" : ""
      }`}
    >
      <div className="flex h-full w-full rounded-2xl items-center justify-center bg-black">
      <iframe
            className="h-full w-full p-1"
            src="https://www.youtube.com/embed/RKW6rjnYEkc?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
      </div>
    </div>
  );
}
