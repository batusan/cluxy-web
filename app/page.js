import Landing from "@/components/landing";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Landing />
    </main>
  );
}
