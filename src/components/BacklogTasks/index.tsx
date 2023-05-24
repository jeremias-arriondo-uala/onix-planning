import { UserStory } from "@/@types";
import React from "react";
import { SearchIcon } from "../Icons/Search";

type BacklogProps = {
  userStories: UserStory[];
  onSelectTask: (task: UserStory) => void;
  taskSelect: UserStory;
};

export const BacklogTasks = ({
  userStories,
  onSelectTask,
  taskSelect,
}: BacklogProps) => {
  return (
    <>
      <div className="flex flex-col">
        <p className="pb-4 text-gray-400 dark:text-gray-600">
          Ingresa una <b>query</b> para cargar historias
        </p>
        <form>
          <label
            htmlFor="query"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Query
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500 truncate"
              placeholder="project in (DTTS) AND issuetype in..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
      {userStories.length > 0 && (
        <ul className="w-full my-4 inner-shadow max-w-sm max-h-48 overflow-auto divide-y divide-gray-200 dark:divide-gray-700">
          {userStories.map((story) => {
            return (
              <li key={story.id} className="px-4 py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <button
                      className={`inline-block text-left overflow-hidden ${
                        taskSelect?.id === story.id && "text-active"
                      }`}
                      onClick={() => onSelectTask(story)}
                    >
                      <h5 className="text-hover text-sm font-medium truncate ">
                        {story?.fields.summary}
                      </h5>
                    </button>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {story?.fields.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
