import DiscordIcon from "../shared/Icons/discord";
import GithubIcon from "../shared/Icons/github";
import HorizontalLogo from "../shared/Icons/horizontalLogo";
import TwitterIcon from "../shared/Icons/twitter";

export default function Footer() {
  return (
    <div
      id="footer"
      className="mt-20 mb-8 text-white flex flex-col justify-center items-center gap-4"
    >
      <HorizontalLogo />
      <div className="text-base font-light">Privacy Policy</div>
      <div className="text-base font-light">Terms of Service</div>
      <div className="flex gap-4">
        <GithubIcon />
        <DiscordIcon />
        <TwitterIcon />
      </div>
    </div>
  );
}
