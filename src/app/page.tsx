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
      <div className="z-10 w-full items-center justify-between lg:flex">
        <h1 className="text-primary font-mono text-md">Sesión: #1</h1>
      </div>
      <Stories />
    </div>
  );
}
