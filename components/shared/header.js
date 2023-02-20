"use client";
import HorizontalLogo from "./Icons/horizontalLogo";
import MenuIcon from "./Icons/menuIcon";
import Link from "next/link";
import { useState } from "react";
import CloseIcon from "./Icons/closeIcon";
import DiscordIcon from "./Icons/discord";

export default function Header() {
  const [isOpen, setisOpen] = useState(false);

  const navigateDiscord = () => {
    window.location.href = "https://discord.gg/tWmFAG5MWH";
  };

  return (
    <div
      className={`text-white h-full w-full z-50 relative flex flex-col ${
        isOpen ? "bg-black" : ""
      }`}
    >
      <div className="h-24 px-4 lg:px-12 flex justify-between items-center ">
        <Link href="/">
          <HorizontalLogo />
        </Link>
        <div>
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-9">
            <Link href="/commands">
              <div className="mb-4">Commands</div>
            </Link>
            <Link href="/faq">
              <div className="mb-4">FAQ</div>
            </Link>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#395cf3] to-[#ff2d95]  dark:text-white focus:ring-4 focus:outline-none focus:ring-transparent dark:focus:ring-transparent">
              <span
                className="relative flex justify-center items-center  px-12 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-md"
                onClick={() => navigateDiscord()}
              >
                <DiscordIcon />
                <span className="ml-2">Discord</span>
              </span>
            </button>
          </div>
          <div
            className="lg:hidden"
            onClickCapture={() => setisOpen((prevState) => !prevState)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>
      <div
        hidden={!isOpen}
        className="absolute top-[6rem] h-screen w-full bg-black z-50  px-4 text-lg lg:hidden pt-6"
      >
        <Link href="/">
          <div className="mb-4">Home</div>
        </Link>
        <Link href="/commands">
          <div className="mb-4">Commands</div>
        </Link>
        <Link href="/faq">
          <div className="mb-4">FAQ</div>
        </Link>
        <button className="relative inline-flex items-center w-full justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#395cf3] to-[#ff2d95]  dark:text-white focus:ring-4 focus:outline-none focus:ring-transparent dark:focus:ring-transparent">
          <span
            className="relative flex justify-center w-full items-center  px-12 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-md"
            onClick={() => navigateDiscord()}
          >
            <DiscordIcon />
            <span className="ml-2">Discord</span>
          </span>
        </button>
      </div>
    </div>
  );
}
