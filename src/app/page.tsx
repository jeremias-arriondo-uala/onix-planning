import { Inter } from "next/font/google";
import { TaskCard } from "@/components/Cards/TaskCard";
import { ListCards } from "@/components/ListCards/ListCards";
import { Stories, Story } from "@/components/Stories";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ónix Planning",
  description: "Planifica tus historias facilmente",
};

export default function Home() {
  const mockStories: Story[] = [
    {
      title: "DTTS-001 Instalar package",
      subtitle: "Se debe instalar el paquete de información",
      id: "001-test",
    },
    {
      title: "DTTS-002 Testear package",
      subtitle:
        "Se debe testear el paquete de información, para ello se debe crear",
      id: "002-test",
    },
    {
      title: "DTTS-003 Deploy cambios",
      subtitle:
        "Se debe testear el paquete de información, para ello se debe crear",
      id: "003-test",
    },
    {
      title: "DTTS-004 Comprobación db",
      subtitle:
        "Se desea comprobar el paquete de información, para ello se debe crear",
      id: "004-test",
    },
    {
      title: "DTTS-005 Romper prop",
      subtitle:
        "Se desea comprobar el paquete de información, para ello se debe crear",
      id: "005-test",
    },
  ];

  return (
    <main className="flex flex-col gap-8 items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="text-primary text-hover text-lg">Ónix planning</p>
        <div className="text-primary">Labs & Support Team</div>
      </div>
      <Stories stories={mockStories} />
      {/* <div>
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
      </section> */}
    </main>
  );
}
