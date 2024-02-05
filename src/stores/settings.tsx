import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface SettingsStore {
  name: string;
  setName(v: string): void;
}

export const useSettingsStore = create(
  persist(
    immer<SettingsStore>((set) => ({
      name: "",
      setName(v) {
        set((s) => {
          s.name = v;
        });
      },
    })),
    {
      name: "settings",
    }
  )
);
