import type { ListCardsProps } from "@/types";
import { PointCard } from "../cards/PointCard";
import { fibonacciArray } from "../../utils/fibonacciArray";

export const ListCards = ({ cantCards = 13 }: ListCardsProps) => {
  const cardsFibonacci = fibonacciArray(cantCards);

  return (
    <section className="flex gap-8 wrap">
      {cardsFibonacci.map(({ value }) => (
        <PointCard key={`card-${value}`} value={value} />
      ))}
    </section>
  );
};
