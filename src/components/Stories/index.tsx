"use client";

import { useEffect, useState } from "react";
import { TaskCard } from "../cards/UserStoryCard";
import { ListCards } from "../ListCards/ListCards";
import { BacklogTasks } from "../BacklogTasks";
import { useStoryPointStore } from "@/store/storyPoint";
import type { UserStory } from "@/@types";
import { ListPlayers } from "../ListPlayers";
import { CurrentUS } from "./CurrentUS";

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
      <div className="grid lg:grid-cols-[3fr_1fr] gap-8">
        <div className="flex flex-col gap-8">
          <div className="grid md:grid-cols-[1fr_1fr] gap-8 md:h-[390px]">
            <BacklogTasks
              userStories={userStories}
              onSelectTask={onSelectStory}
            />
            <CurrentUS />
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
