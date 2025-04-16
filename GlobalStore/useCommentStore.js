import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCommentStore = persist(
  create((set) => ({
    comments: [],
    addComment: (comment) =>
      set((state) => ({
        comments: [...state.comments, comment],
      })),
  }))
);
