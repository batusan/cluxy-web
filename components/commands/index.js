import Footer from "../landing/footer";
import Background from "../shared/bg";
import Header from "../shared/header";
import Banner from "../shared/Banner";
import CommandsWrapper from "./CommandsWrapper";

export default function Commands() {
  return (
    <div className="text-white h-full w-full">
      <Header />
      <div className="flex flex-col justify-center items-center z-10 relative">
        <Banner
          title={"Commands"}
          description={
            "Find all the information, including required permissions, regarding the extensive list of commands available."
          }
          isButtonEnable={true}
        />
        <CommandsWrapper />
      </div>
      <Background />
      <Footer />
    </div>
  );
}
