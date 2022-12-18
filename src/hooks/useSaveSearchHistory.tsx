import { useHistoryStore } from "@store/useHistoryStore";
import { IHistoryItem } from "@tps/history";
import { SearchType } from "@tps/search";
import { v4 as uuidv4 } from "uuid";

export const useSaveSearchHistory = () => {
  const { setHistoryList } = useHistoryStore();

  const save = (query: string, type: SearchType): void => {
    const request: IHistoryItem = {
      id: uuidv4(),
      query,
      type,
      created_at: Date.now(),
    };

    setHistoryList(request);
  };

  return [save];
};
