import { Inter } from "@next/font/google";
import Faq from "@/components/faq";

const inter = Inter({ subsets: ["latin"] });

export default function FaqPage() {
  return (
    <div className={inter.className}>
      <Faq />
    </div>
  );
}
