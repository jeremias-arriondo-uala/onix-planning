import React from "react";
import { UserIcon } from "../Icons/User";
import { Plaster } from "next/font/google";
import { Player } from "./Player";

type User = {
  email: string;
  name?: string;
  status?: string;
  id: string;
};

const users: User[] = [
  {
    email: "jeremias.arriondo@uala.com.ar",
    name: "Jeremias Arriondo",
    id: "asdsad1",
  },
  {
    email: "ignacio.garcia@uala.com.ar",
    name: "Ignacio G.R",
    id: "asdsad2",
  },
  {
    email: "player.one@uala.com.ar",
    id: "sadasd3",
  },
];

export const ListPlayers = () => {
  return (
    <div className="w-full">
      <div className="py-4 bg-gray-200 dark:bg-gray-700 rounded-t-lg">
        <h3 className="px-4">Players:</h3>
      </div>
      <ul className="h-full border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
        {users?.map(({ id, email, name }) => {
          return (
            <li key={id} className="p-4">
              <Player name={name} email={email} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
