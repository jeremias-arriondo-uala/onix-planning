"use client";

import { useState } from "react";
import { ListCards } from "../ListCards/ListCards";
import { Stories } from "../Stories";

export const Estimate = () => {
  const [cardSelect, setCardSelect] = useState();
  return (
    <>
      <Stories stories={[]} />
      <ListCards />
    </>
  );
};
