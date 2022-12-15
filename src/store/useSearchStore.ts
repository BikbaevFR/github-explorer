import create from "zustand";

interface State {
  query: string;
}

interface Actions {
  setQuery: (query: string) => void;
}

export const useSearchStore = create<State & Actions>()((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
}));
