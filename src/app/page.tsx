import { Inter } from "next/font/google";
import { Stories } from "@/components/Stories";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ónix Planning",
  description: "Planifica tus historias facilmente",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-between py-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <span className="text-primary">Labs & Support Team</span>
      </div>
      <Stories />
    </div>
  );
}
