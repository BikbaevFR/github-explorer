import { REPOS_PER_PAGE, SEARCH_PER_PAGE } from "@api/constants";
import {
  fetchRepoInfo,
  fetchRepositories,
  fetchSearch,
  fetchUserInfo,
} from "@api/index";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { IRepoInfo } from "@tps/repo";
import { SearchResponse, SearchType } from "@tps/search";
import { IUserInfo, IUserRepo } from "@tps/user";
import { uniq } from "@utils/index";

export const useSearch = (query: string, type: SearchType): any => {
  const {
    data,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["search", { query, type }],
    ({ pageParam = 1 }) => fetchSearch(pageParam, query, type),
    {
      enabled: Boolean(query),
      keepPreviousData: true,
      getNextPageParam: (
        lastPage: SearchResponse[],
        allPages: Array<SearchResponse[]>
      ) =>
        lastPage.length === SEARCH_PER_PAGE ? allPages.length + 1 : undefined,
      staleTime: 60000,
      select: ({ pageParams, pages }) => ({
        pageParams,
        pages: uniq(pages.flat()),
      }),
    }
  );

  return {
    searchList: data?.pages,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
  };
};

export const useUserInfo = (
  login: string | undefined
): [IUserInfo | null, boolean] => {
  const { data, isLoading } = useQuery(
    ["userInfo", login],
    () => fetchUserInfo(login),
    {
      staleTime: 60000,
    }
  );

  const userInfo = data ?? null;

  return [userInfo, isLoading];
};

export const useRepoInfo = (
  login: string | undefined,
  name: string | undefined
): [IRepoInfo | null, boolean] => {
  const { data, isLoading } = useQuery(
    ["repoInfo", { login, name }],
    () => fetchRepoInfo(login, name),
    {
      staleTime: 60000,
    }
  );

  const repoInfo = data ?? null;
  return [repoInfo, isLoading];
};

export const useUserRepos = (login: string | undefined): any => {
  const {
    data,
    isLoading: isLoadingRepos,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["repos", login],
    ({ pageParam = 1 }) => fetchRepositories(pageParam, login),
    {
      staleTime: 60000,
      getNextPageParam: (lastPage: IUserRepo[], allPages: Array<IUserRepo[]>) =>
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
