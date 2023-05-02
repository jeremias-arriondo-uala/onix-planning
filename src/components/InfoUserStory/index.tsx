"use client";

import { useStoryPointStore } from "@/store/storyPoint";

export const InfoUserStory = () => {
  const storySelected = useStoryPointStore((state) => state.currentUserStory);
  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-active text-3xl">{storySelected?.fields?.summary}</h3>
      <p>{storySelected?.fields?.description}</p>
      <p>
        Status:
        <span className="px-2 underline decoration-wavy decoration-violet-400">
          {storySelected?.fields?.status?.name}
        </span>
      </p>
    </section>
  );
};
