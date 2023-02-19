import Commands from "@/components/commands";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function CommandsPage() {
  return (
    <main className={inter.className}>
      <Commands />
    </main>
  );
}
