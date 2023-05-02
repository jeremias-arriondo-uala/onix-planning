import { InfoUserStory } from "@/components/InfoUserStory";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "User Story",
  description: "Planifica tus historias facilmente",
};

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex flex-col gap-8 items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <span className="text-primary">Labs & Support Team</span>
        <span>Historia de usuario: {params?.slug}</span>
      </div>
      <InfoUserStory />
    </main>
  );
}
