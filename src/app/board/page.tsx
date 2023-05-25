import { QuerySearch } from "@/components/QuerySearch";
import { Skeleton } from "@/components/Skeleton";
import React from "react";

export const metadata = {
  title: "Board",
  description: "Planifica tus historias facilmente",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8 items-center justify-between p-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <span className="text-primary">Labs & Support Team</span>
        <span>Board</span>
      </div>
      <section className="w-full">
        <QuerySearch />
        <Skeleton />
      </section>
    </div>
  );
}
