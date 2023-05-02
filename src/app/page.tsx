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
        <span className="text-primary">Labs & Support Team</span>
      </div>
      <Stories stories={mockStories} />
    </main>
  );
}
