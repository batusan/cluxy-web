import Background from "../shared/bg";
import Header from "../shared/header";

export default function Maintenance() {
  return (
    <div className="text-white h-full w-full">
      <Header />
      <Background />
      <div className="flex flex-col justify-start mt-48 w-full h-full items-center text-4xl">
        <div className="mb-4 font-thin">
          <span className="cluxy-text-hero">Cluxy</span> is coming soon.
        </div>
        <div className="font-light text-xl text-gray-500/80">
          Follow us for update now.
        </div>
      </div>
    </div>
  );
}
