import { useStoryPointStore } from "@/store/storyPoint";
import { TaskCard } from "../cards/UserStoryCard";

export const CurrentUS = () => {
  const { currentUserStory } = useStoryPointStore();
  return (
    <div className="w-full block">
      <div className="py-4 bg-gray-200 dark:bg-gray-700 rounded-t-lg">
        <h3 className="px-4 whitespace-nowrap">Historia a estimar:</h3>
      </div>
      {currentUserStory?.id ? (
        <TaskCard story={currentUserStory} newKey={currentUserStory.key} />
      ) : (
        <p className="py-4 text-gray-400 dark:text-gray-600">
          Selecciona una historia del panel izquierdo para iniciar
        </p>
      )}
    </div>
  );
};
