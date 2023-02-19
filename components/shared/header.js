"use client";
import HorizontalLogo from "./Icons/horizontalLogo";
import MenuIcon from "./Icons/menuIcon";
import Link from "next/link";
import { useState } from "react";
import CloseIcon from "./Icons/closeIcon";

export default function Header() {
  const [isOpen, setisOpen] = useState(false);

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
          <div className="hidden lg:flex lg:gap-9">
            <Link href="/commands">
              <div className="mb-4">Commands</div>
            </Link>
            <Link href="/faq">
              <div className="mb-4">FAQ</div>
            </Link>
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
      </div>
    </div>
  );
}
