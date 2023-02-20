"use client";

import { useRef } from "react";
import useOnScreen from "@/hooks/useOnScreen";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

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
        <LiteYouTubeEmbed
          id="RKW6rjnYEkc"
          activeClass="lyt-activated" // Default as "lyt-activated", gives control to wrapper once clicked
          iframeClass="" // Default none, gives control to add a class to iframe element itself
          playerClass="lty-playbtn" // Default as "lty-playbtn" to control player button styles
          wrapperClass="yt-lite h-full w-full rounded-lg" // Default as "yt-lite" for the div wrapping the area, the most important class and needs extra attention, please refer to LiteYouTubeEmbed.css for a reference.
          thumbnail="/images/discordimage.webp"
        />
      </div>
    </div>
  );
}
