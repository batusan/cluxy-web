import Header from "@/components/shared/header";
import Background from "../shared/bg";
import Footer from "./footer";
import HeroSection from "./heroSection";
import SpecialSection from "./specialSection";
import SplashImage from "./splashMockup";
import UsageStats from "./usageStats";

export default function Landing() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Background />
      <Header />
      <HeroSection />
      {/*<SplashImage />*/}
      <SpecialSection />
      <UsageStats />
      <Footer />
    </div>
  );
}
