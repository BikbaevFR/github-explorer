import { SearchType, SearchTypes } from "@tps/search";
import create from "zustand";

interface State {
  query: string;
  type: SearchType;
}

interface Actions {
  setQuery: (query: string) => void;
  setType: (type: SearchType) => void;
}

export const useSearchStore = create<State & Actions>()((set) => ({
  query: "",
  type: SearchTypes.USERS,
  setQuery: (query) => set({ query }),
  setType: (type) => set({ type }),
}));
