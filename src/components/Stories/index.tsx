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
      <div className="grid sm:grid-cols-[1fr_1fr_1fr] gap-8 my-8">
        <div className="w-full">
          {/* <h3 className="py-4">Historia a estimar:</h3> */}
          <div className="py-4 bg-gray-50 dark:bg-gray-700 rounded-t-lg">
            <h3 className="px-4">Historia a estimar:</h3>
          </div>
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
        <div className="max-w-xl ">
          {/* <h3 className="py-4">Historias en backlog: </h3> */}
          <div className="py-4 bg-gray-50 dark:bg-gray-700 rounded-t-lg">
            <h3 className="px-4">Historias en backlog:</h3>
          </div>
          <BacklogTasks
            userStories={userStories}
            taskSelect={currentUserStory}
            onSelectTask={onSelectStory}
          />
        </div>
        <div>
          <ListPlayers />
        </div>
      </div>
      <ListCards />
    </section>
  );
};
