import { Inter } from "next/font/google";
import { Card } from "@/components/cards/TaskCard";
import { ListCards } from "@/components/ListCards/ListCards";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ónix Planning",
  description: "Planifica tus historias facilmente",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="text-primary text-hover text-lg">Ónix planning</p>
        <div className="text-primary">Labs & Support Team</div>
      </div>
      <div>
        <ListCards cantCards={13} />
      </div>
      <div className="flex justify-center mb-12">
        <div className="relative rounded-lg pointer-events-none shadow-lgDark ">
          <div className="z-10 relative overflow-hidden rounded-[inherit] p-[3px] m-[-2px] isolate">
            <div className="will-change-transform animate-buttonStroke blur-[4px] origin-[center_center] absolute top-0 left-0 right-0 bottom-0 bg-buttonConicGradient"></div>
            <div className="relative z-100">
              <div className="flex items-center space-x-3 bg-gray-100 dark:bg-[#0e1422] hover:bg-gray-200 border border-[#ffffff10] text-gray-900 dark:text-white font-bold px-8 py-4 rounded-lg">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <Card />
      </section>
    </main>
  );
}
