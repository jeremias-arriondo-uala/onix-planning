import { UserStory } from "@/@types";
import { useStoryPointStore } from "@/store/storyPoint";
import React from "react";

type TaskProp = {
  task: UserStory;
  onSelectTask: (task: UserStory) => void;
};

export const Task = ({ task, onSelectTask }: TaskProp) => {
  const { currentUserStory } = useStoryPointStore();
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1 min-w-0 w-[200px]">
        <button
          className={`inline-block text-left overflow-hidden ${
            currentUserStory?.id === task.id && "text-active"
          }`}
          onClick={() => onSelectTask(task)}
        >
          <h5 className="text-hover text-sm font-medium truncate ">
            {task?.fields.summary}
          </h5>
        </button>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {task?.fields.description}
        </p>
      </div>
    </div>
  );
};
