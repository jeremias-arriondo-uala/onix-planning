import { Inter } from "next/font/google";
import { Card } from "@/components/cards/TaskCard";
import { ListCards } from "@/components/ListCards/ListCards";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Planning",
  description: "Planifica tus historias facilmente",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Ónix planning
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          Labs & Support Team
        </div>
      </div>
      <div>
        <ListCards cantCards={13} />
      </div>
      <section>
        <Card />
      </section>
    </main>
  );
}
