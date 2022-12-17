import { useConstructor } from "@hooks/useConstructor";
import { useSearchStore } from "@store/useSearchStore";
import { SearchType } from "@tps/search";
import { useSearchParams } from "react-router-dom";

export enum QueryParams {
  QUERY = "query",
  TYPE = "type",
}

export const useQueryParams = (): [() => void] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get(QueryParams.QUERY);
  const type = searchParams.get(QueryParams.TYPE) as SearchType;
  const { setQuery } = useSearchStore();
  const { setType } = useSearchStore();

  const deleteParams = (): void => {
    const queryParams = Object.values(QueryParams) as Array<QueryParams>;

    if (!query && !type) return;

    queryParams.forEach((value) => {
      searchParams.delete(value);
    });

    setSearchParams(searchParams);
  };

  const setQueryParamsInStore = () => {
    if (query) setQuery(query);
    if (type) setType(type);
  };

  useConstructor(setQueryParamsInStore);

  return [deleteParams];
};
