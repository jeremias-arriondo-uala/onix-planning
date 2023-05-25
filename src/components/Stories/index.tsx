"use client";

import { useEffect, useState } from "react";
import { TaskCard } from "../cards/UserStoryCard";
import { ListCards } from "../ListCards/ListCards";
import { BacklogTasks } from "../BacklogTasks";
import { useStoryPointStore } from "@/store/storyPoint";
import type { UserStory } from "@/@types";
import { Skeleton } from "../Skeleton";
import { ListPlayers } from "../ListPlayers";

export const Stories = () => {
  const { selectUserStory, currentUserStory, fetchStories } =
    useStoryPointStore();
  const [loading, setLoading] = useState(true);
  const onSelectStory = (story: UserStory) => {
    selectUserStory(story);
  };

  // Hago un fetch a la data mockeada
  useEffect(() => {
    fetchStories();
  }, [fetchStories]);

  const userStories = useStoryPointStore((state) => state.userStories);

  return (
    <section>
      <div className="grid sm:grid-cols-[3fr_1fr] gap-8">
        <div className="flex flex-col gap-8">
          <div className="grid sm:grid-cols-[1fr_1fr] gap-8 h-[390px]">
            <div className="max-w-xl w-[576px]">
              <BacklogTasks
                userStories={userStories}
                taskSelect={currentUserStory}
                onSelectTask={onSelectStory}
              />
            </div>
            <div className="w-full">
              <div className="py-4 bg-gray-200 dark:bg-gray-700 rounded-t-lg">
                <h3 className="px-4 whitespace-nowrap">Historia a estimar:</h3>
              </div>
              {currentUserStory?.id ? (
                <TaskCard {...currentUserStory} newKey={currentUserStory.key} />
              ) : (
                <p className="py-4 text-gray-400 dark:text-gray-600">
                  Selecciona una historia del panel izquierdo para iniciar
                </p>
              )}
            </div>
          </div>
          <ListCards cantCards={21} />
        </div>
        <div>
          <ListPlayers />
        </div>
      </div>
    </section>
  );
};
