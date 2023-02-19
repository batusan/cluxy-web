import Image from "next/image";

export default function HorizontalLogo() {
  return (
    <Image
      src="/images/cluxy-horizontal-light.svg"
      height={128}
      width={128}
      alt="Cluxy logo"
      priority
    />
  );
}
