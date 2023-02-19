import Header from "@/components/shared/header";
import { Inter } from "@next/font/google";
import Maintenance from "@/components/maintenance";

const inter = Inter({ subsets: ["latin"] });

export default function MaintenancePage() {
  return (
    <div className={inter.className}>
      <Maintenance />
    </div>
  );
}
