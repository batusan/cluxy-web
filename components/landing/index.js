import Header from "@/components/shared/header";
import Footer from "./footer";
import HeroSection from "./heroSection";
import SpecialSection from "./specialSection";
import SplashImage from "./splashMockup";
import UsageStats from "./usageStats";

export default function Landing() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div id="bg" className="top-0 left-0 absolute h-full w-full">
      </div>
      <Header />
      <HeroSection />
      <SplashImage />
      <SpecialSection />
      <UsageStats />
      <Footer />
    </div>
  );
}
