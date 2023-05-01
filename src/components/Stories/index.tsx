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
  return (
    <section>
      <div className="flex justify-between my-8">
        <div>
          <h3 className="py-4">Historia a estimar:</h3>
          <TaskCard />
        </div>
        <div>
          <h3 className="py-4">Historias en backlog: </h3>
          <ul className="max-w-sm max-h-48 overflow-auto  divide-y divide-gray-200 dark:divide-gray-700">
            {stories?.map((story) => {
              return (
                <li key={story.id} className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <h5 className="text-hover text-sm font-medium truncate ">
                        {story.title}
                      </h5>
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
