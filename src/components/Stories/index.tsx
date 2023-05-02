"use client";

import { useState } from "react";
import { TaskCard } from "../Cards/TaskCard";
import { ListCards } from "../ListCards/ListCards";

export type Story = {
  title: string;
  subtitle: string;
  point?: number;
  id: string;
};

type StoriesProps = {
  stories: Story[];
};

export const Stories = ({ stories }: StoriesProps) => {
  const [storySelected, setStorySelected] = useState<Story>();

  const onSelectStory = (story: Story) => {
    setStorySelected(story);
  };

  return (
    <section>
      <div className="grid  sm:grid-cols-[1fr_1fr] gap-8 my-8">
        <div className="w-full">
          <h3 className="py-4">Historia a estimar:</h3>
          {storySelected ? (
            <TaskCard
              title={storySelected.title}
              subtitle={storySelected.subtitle}
              point={storySelected?.point}
              id={storySelected.id}
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
            {stories?.map((story) => {
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
                          {story.title}
                        </h5>
                      </button>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {story.subtitle}
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
