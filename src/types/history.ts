import { SearchType } from "@tps/search";

export interface IHistoryItem {
  id: string;
  query: string;
  created_at: number;
  type: SearchType;
}
