"use client";
import DiscordIcon from "../shared/Icons/discord";
import PlusIcon from "../shared/Icons/plusIcon";
import { useRouter } from "next/navigation";

export default function HeroSection(props) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/games");
  };

  return (
    <div className="text-white text-center font-[600] text-3xl lg:text-6xl mt-12 lg:mt-24 px-4 transition-all mb-36">
      Monitor Your Server with <span className="cluxy-text-hero">Cluxy</span>
      <div className="text-base lg:text-lg mt-8 lg:mt-12 font-light text-white/50">
        A discord bot that allows you to monitoring your game server and tracks
        the live data of it.
      </div>
      {/*
      <div className="text-base lg:text-lg mt-8 lg:mt-10 font-light text-white/50">
        Manage your meetings, agendas, and notes directly from browser tabs.
      </div>
      <div className="text-base lg:text-lg mt-8 lg:mt-10 font-light text-white/50">
        Powered by AI, integrated with Zoom, Notion, and Google Meet.
      </div>
      */}
      <button
        className="relative inline-flex items-center justify-center mt-12 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-[#395cf3] to-[#ff2d95]  text-white focus:ring-4 focus:outline-none  focus:ring-transparent"
        onClick={handleRedirect}
      >
        <span className="relative flex justify-center items-center  px-12 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
          <PlusIcon />
          <span className="ml-2">Game List</span>
        </span>
      </button>
      <button
        className="relative inline-flex items-center justify-center mt-12 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-[#395cf3] to-[#ff2d95]  text-white focus:ring-4 focus:outline-none  focus:ring-transparent"
        onClick={() => alert("SOOOOOOOOOOOOOOOOOOOOOOON")}
      >
        <span className="relative flex justify-center items-center  px-12 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
          <DiscordIcon />
          <span className="ml-2">Invite the cluxy</span>
        </span>
      </button>
    </div>
  );
}
