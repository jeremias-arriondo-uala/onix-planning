import type { ListCardsProps } from "@/@types";
import { PointCard } from "../Cards/PointCard";
import { fibonacciArray } from "../../utils/fibonacciArray";

export const ListCards = ({ cantCards = 13 }: ListCardsProps) => {
  const cardsFibonacci = fibonacciArray(cantCards);

  return (
    <section className="flex flex-wrap gap-8">
      {cardsFibonacci.map(({ value }) => (
        <PointCard key={`card-${value}`} value={value} />
      ))}
    </section>
  );
};
