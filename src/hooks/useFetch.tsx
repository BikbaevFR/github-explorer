import { REPOS_PER_PAGE, SEARCH_PER_PAGE } from "@api/constants";
import { fetchRepositories, fetchSearch, fetchUserInfo } from "@api/index";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { IRepo } from "@tps/repos";
import { ISearchUser } from "@tps/search";
import { IUserInfo } from "@tps/user";
import { uniq } from "@utils/index";
import { useState } from "react";

export const useSearch = (query: string): any => {
  const [enabled, setEnabled] = useState<boolean>(false);

  const searchQuery = useInfiniteQuery(
    ["search", query],
    ({ pageParam = 1 }) => fetchSearch(pageParam, query),
    {
      enabled,
      keepPreviousData: true,
      getNextPageParam: (
        lastPage: ISearchUser[],
        allPages: Array<ISearchUser[]>
      ) =>
        lastPage.length === SEARCH_PER_PAGE ? allPages.length + 1 : undefined,
      staleTime: 60000,
      select: ({ pageParams, pages }) => ({
        pageParams,
        pages: uniq(pages.flat()),
      }),
    }
  );

  const enable = () => setEnabled(true);

  const {
    data,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = searchQuery;

  return {
    searchList: data?.pages,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
    enable,
  };
};

export const useUserInfo = (
  login: string | undefined
): [IUserInfo | null, boolean] => {
  const { data, isLoading } = useQuery(["userInfo"], () =>
    fetchUserInfo(login)
  );

  const userInfo = data ?? null;

  return [userInfo, isLoading];
};

export const useRepos = (login: string | undefined): any => {
  const {
    data,
    isLoading: isLoadingRepos,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["repos"],
    ({ pageParam = 1 }) => fetchRepositories(pageParam, login),
    {
      getNextPageParam: (lastPage: IRepo[], allPages: Array<IRepo[]>) =>
        lastPage.length === REPOS_PER_PAGE ? allPages.length + 1 : undefined,
    }
  );

  const repos = data?.pages.flat() ?? [];

  return {
    repos,
    isLoadingRepos,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
};
