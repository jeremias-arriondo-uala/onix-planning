import { create } from "zustand";
import type { UserStory } from "@/@types";

interface State {
  userStories: UserStory[];
  currentUserStory: UserStory;
  fetchStories: () => Promise<void>;
  selectUserStory: (userStory: UserStory) => void;
  changedStoryPoint: (storyPoint: number) => void;
}

export const useStoryPointStore = create<State>((set) => {
  return {
    userStories: [],
    currentUserStory: {} as UserStory,
    selectUserStory: (currentUserStory) => set({ currentUserStory }),
    changedStoryPoint: (storyPoint: number) => {
      set((state) => ({
        ...state,
        currentUserStory: {
          ...state.currentUserStory,
          fields: {
            ...state.currentUserStory.fields,
            storyPoint,
          },
        } as UserStory,
      }));
    },
    fetchStories: async () => {
      const res = await fetch("/api/user-stories");
      const userStories = await res.json();
      set({ userStories });
    },
  };
});
