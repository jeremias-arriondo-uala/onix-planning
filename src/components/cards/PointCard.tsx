"use client";
import type { PointCardProps } from "@/@types";
import { useStoryPointStore } from "@/store/storyPoint";

export const PointCard = ({ value = 0 }: PointCardProps) => {
  const storySelected = useStoryPointStore((state) => state.currentUserStory);

  const changedStoryPoint = useStoryPointStore(
    (state) => state.changedStoryPoint
  );

  return (
    <button
      onClick={() => changedStoryPoint(value)}
      aria-label="Value point card"
      className="w-32 h-36 p-4 border border-gray-500 rounded overflow-hidden shadow-box shadow-gray-800 hover:shadow-box cursor-pointer"
    >
      <div className="flex items-center justify-center h-full border border-gray-500">
        <span
          className={`text-primary m-4 py-4 px-2 text-3xl ${
            storySelected?.fields?.storyPoint === value ? "text-active" : ""
          }`}
        >
          {value}
        </span>
      </div>
    </button>
  );
};
