import { create } from "zustand";
import type { UserStory } from "@/@types";

interface State {
  userStories: UserStory[];
  currentUserStory: number;
  fetchStories: () => Promise<void>;
}

export const useStoryPointStore = create<State>((set, get) => {
  return {
    userStories: [],
    currentUserStory: 0,
    fetchStories: async () => {
      const res = await fetch("/api/user-stories");
      const userStories = await res.json();
      set({ userStories });
    },
  };
});
