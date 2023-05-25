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
    id: "asdsad",
  },
  {
    email: "ignacio.garcia@uala.com.ar",
    name: "Ignacio G.R",
    id: "asdsad",
  },
  {
    email: "player.one@uala.com.ar",
    id: "sadasd",
  },
];

export const ListPlayers = () => {
  return (
    <div>
      <div className="py-4 bg-gray-50 dark:bg-gray-700 rounded-t-lg">
        <h3 className="px-4">Players:</h3>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
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
