import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { ThemeMode } from "~/models";

interface IGlobalState {
  mode: ThemeMode;
}

interface IGlobalActions {
  setMode: (mode: ThemeMode) => void;
}

type IGlobalStore = IGlobalState & IGlobalActions;

export const useThemeMode = create<
  IGlobalStore,
  [["zustand/devtools", never], ["zustand/persist", unknown]]
>(
  devtools(
    persist(
      (set) => ({
        mode: "light",
        setMode: (mode) => set({ mode }),
      }),
      {
        name: "global-storage",
      },
    ),
  ),
);
