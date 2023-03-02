import ClockIcon from "@/components/shared/Icons/clockIcon";
import Image from "next/image";

export default function SpecialItem(props) {
  return (
    <div className="flex flex-col justify-center items-center mb-6 w-full sm:w-1/2 lg:w-1/4">
      <div className="bg-[#1B1D22] p-3 rounded-xl">
        <Image src={props.icon} height={24} w={24} />
      </div>
      <h1 className="text-base mt-4">{props.title}</h1>
      <div className="text-center px-8 text-sm mt-4 text-white/60">
        {props.desc}
      </div>
    </div>
  );
}
