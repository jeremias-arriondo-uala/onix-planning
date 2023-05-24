"use client";

import { useEffect, useState } from "react";
import { TaskCard } from "../cards/UserStoryCard";
import { ListCards } from "../ListCards/ListCards";
import { BacklogTasks } from "../BacklogTasks";
import { useStoryPointStore } from "@/store/storyPoint";
import type { UserStory } from "@/@types";

export const Stories = () => {
  const { selectUserStory, currentUserStory } = useStoryPointStore();

  const onSelectStory = (story: UserStory) => {
    selectUserStory(story);
  };

  // Hago un fetch a la data mockeada
  const fetchStories = useStoryPointStore((state) => state.fetchStories);
  useEffect(() => {
    fetchStories();
  }, [fetchStories]);

  const userStories = useStoryPointStore((state) => state.userStories);

  return (
    <section>
      <div className="grid sm:grid-cols-[1fr_1fr] gap-8 my-8">
        <div className="w-full">
          <h3 className="py-4">Historia a estimar:</h3>
          {currentUserStory?.id ? (
            <TaskCard
              {...currentUserStory}
              newKey={currentUserStory.key}
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
          <BacklogTasks
            userStories={userStories}
            taskSelect={currentUserStory}
            onSelectTask={onSelectStory}
          />
        </div>
      </div>
      <ListCards />
    </section>
  );
};
