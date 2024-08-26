import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { ThemeMode } from "~/models";

interface IThemeModeState {
  mode: ThemeMode;
}

interface ThemeModeActions {
  setMode: (mode: ThemeMode) => void;
}

type IThemeModeStore = IThemeModeState & ThemeModeActions;

export const useThemeMode = create<
  IThemeModeStore,
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
