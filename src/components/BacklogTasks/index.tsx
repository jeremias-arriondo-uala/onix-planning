import { UserStory } from "@/@types";
import { QuerySearch } from "../QuerySearch";

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
      <QuerySearch />
      {userStories.length > 0 && (
        <ul className="w-full my-4 inner-shadow max-h-48 overflow-auto divide-y divide-gray-200 dark:divide-gray-700">
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
