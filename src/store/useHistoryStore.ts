import { IHistoryItem } from "@tps/history";
import create from "zustand";
import { persist } from "zustand/middleware";

const MAX_SAVED_REQUEST: number = 10;

interface State {
  historyList: IHistoryItem[];
}

interface Actions {
  setHistoryList: (request: IHistoryItem) => void;
}

export const useHistoryStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      historyList: [],
      setHistoryList: (request) => {
        const { historyList } = get();

        const list = [request, ...historyList];

        if (list.length > MAX_SAVED_REQUEST) {
          list.splice(MAX_SAVED_REQUEST);
        }

        set({ historyList: list });
      },
    }),
    {
      name: "history",
      getStorage: () => localStorage,
    }
  )
);
