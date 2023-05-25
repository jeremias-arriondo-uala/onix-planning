import { ListPlayers } from "@/components/ListPlayers";
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
      <div className="z-10 w-full items-center justify-between lg:flex">
        <h1 className="font-mono text-md">Board</h1>
      </div>
      <section className="w-full">
        <QuerySearch />
        <Skeleton />
        <ListPlayers />
      </section>
    </div>
  );
}
