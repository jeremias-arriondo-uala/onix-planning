import { UserStory } from "@/@types";
import { QuerySearch } from "../QuerySearch";
import { Task } from "./Task";

type BacklogProps = {
  userStories: UserStory[];
  onSelectTask: (task: UserStory) => void;
};

export const BacklogTasks = ({ userStories, onSelectTask }: BacklogProps) => {
  return (
    <div>
      <div className="py-4 bg-gray-200 dark:bg-gray-700 rounded-t-lg">
        <h3 className="px-4">Historias en backlog:</h3>
      </div>
      <QuerySearch />
      {userStories.length > 0 && (
        <ul className="my-4 inner-shadow max-h-48 overflow-auto divide-y divide-gray-200 dark:divide-gray-700">
          {userStories.map((story) => {
            return (
              <li key={story.id} className="px-4 py-4">
                <Task task={story} onSelectTask={onSelectTask} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
