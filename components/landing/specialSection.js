"use client";
import useOnScreen from "@/hooks/useOnScreen";
import { useRef } from "react";
import SpecialItem from "./specials/specialtem";
import EasyManagementIcon from "@/assets/easy-m.png";
import RefreshIcon from "@/assets/refresh.png";
import UptimeIcon from "@/assets/uptime.png";
import SecurityIcon from "@/assets/security.png";

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
      <div className="mt-24 lg:mt-32 flex flex-wrap justify-center items-center">
        <SpecialItem
          title="Easy Management"
          icon={EasyManagementIcon}
          desc={
            "We have a simple and user-friendly bot, so you can easily monitor your game server with us."
          }
        />
        <SpecialItem
          title="Auto Refresh"
          icon={RefreshIcon}
          desc={
            "Your game server will be updated automatically after you have added it once."
          }
        />
        <SpecialItem title="99.9% Uptime Guarantee" icon={UptimeIcon} desc={"Our bots are working 24/7 with constant monitoring your game server."} />
        <SpecialItem title="Security" icon={SecurityIcon} desc={"The bots are automatically protected from attacks so that our bots are always smoothly accessible."} />
      </div>
    </div>
  );
}
