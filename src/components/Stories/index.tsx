"use client";

import { useEffect, useState } from "react";
import { TaskCard } from "../Cards/UserStoryCard";
import { ListCards } from "../ListCards/ListCards";
import { useStoryPointStore } from "@/store/storyPoint";
import type { UserStory } from "@/@types";

export const Stories = () => {
  const [storySelected, setStorySelected] = useState<UserStory>();

  const onSelectStory = (story: UserStory) => {
    setStorySelected(story);
  };
  // Hago un fetch a la data mockeada
  const fetchStories = useStoryPointStore((state) => state.fetchStories);
  useEffect(() => {
    fetchStories();
  }, [fetchStories]);

  const userStories = useStoryPointStore((state) => state.userStories);
  return (
    <section>
      <div className="grid  sm:grid-cols-[1fr_1fr] gap-8 my-8">
        <div className="w-full">
          <h3 className="py-4">Historia a estimar:</h3>
          {storySelected ? (
            <TaskCard
              {...storySelected}
              newKey={storySelected.key}
              // point={storySelected?.point}
            />
          ) : (
            <span className="text-gray-400 dark:text-gray-600">
              Selecciona una historia del panel para iniciar
            </span>
          )}
        </div>
        <div>
          <h3 className="py-4">Historias en backlog: </h3>
          <ul className="inner-shadow max-w-sm max-h-48 overflow-auto  divide-y divide-gray-200 dark:divide-gray-700">
            {userStories?.map((story) => {
              return (
                <li key={story.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <button
                        className={`inline-block text-left overflow-hidden ${
                          storySelected?.id === story.id && "text-active"
                        }`}
                        onClick={() => onSelectStory(story)}
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
        </div>
      </div>

      <ListCards />
    </section>
  );
};
