import { InfoUserStory } from "@/components/InfoUserStory";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "User Story",
  description: "Planifica tus historias facilmente",
};

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col gap-8 items-center justify-between p-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex">
        <h1 className="font-mono text-md">
          Historia de usuario: {params?.slug}
        </h1>
      </div>
      <InfoUserStory />
    </div>
  );
}
