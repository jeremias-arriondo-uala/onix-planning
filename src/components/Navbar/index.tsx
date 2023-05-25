"use client";

import Link from "next/link";
import { NavLink } from "./navlink";
import { menuItems } from "@/data/constants";
import { ThemeSwitch } from "../ThemeSwitch";

export function Navbar() {
  return (
    <div className="border-b-2 border-gray-500">
      <header className="container flex items-center justify-between px-4 py-4 mx-auto font-semibold leading-6 lg:py-6">
        <Link
          className="transition duration-300 text-primary text-hover"
          href="/"
        >
          Ónix Planning
        </Link>
        <div className="flex items-center">
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-8">
              {menuItems.map((item, index) => {
                return (
                  <li key={`${item.path}`}>
                    <NavLink
                      href={item.path}
                      exact
                      className="transition duration-300 text-hover"
                    >
                      {item.name}
                      {item.new ? (
                        <span className="ml-2 font-medium text-xs leading-5 rounded-full text-new px-2 py-0.5 ">
                          New
                        </span>
                      ) : null}
                    </NavLink>
                  </li>
                );
              })}
              <li className="text-base">
                <ThemeSwitch />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
