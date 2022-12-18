import $axios from "@api/axios.config";
import { REPOS_PER_PAGE, SEARCH_PER_PAGE } from "@api/constants";
import { IRepoInfo } from "@tps/repo";
import { SearchResponse, SearchType } from "@tps/search";
import { IUserInfo, IUserRepo } from "@tps/user";

export const fetchSearch = async (
  page: number,
  q: string,
  type: SearchType
): Promise<SearchResponse[]> => {
  const url = `search/${type}`;

  const response = await $axios.get(url, {
    params: { q, per_page: SEARCH_PER_PAGE, page },
  });
  return response.data.items;
};

export const fetchUserInfo = async (
  login: string | undefined
): Promise<IUserInfo> => {
  const baseUrl = `/users/${login}`;

  const response = await $axios.get(baseUrl);
  return response.data;
};

export const fetchRepoInfo = async (
  login: string | undefined,
  name: string | undefined
): Promise<IRepoInfo> => {
  const baseUrl = `/repos/${login}/${name}`;

  const response = await $axios.get(baseUrl);
  return response.data;
};

export const fetchRepositories = async (
  page: number,
  login: string | undefined
): Promise<IUserRepo[]> => {
  const baseUrl = `/users/${login}/repos`;

  const response = await $axios.get(baseUrl, {
    params: { per_page: REPOS_PER_PAGE, page },
  });
  return response.data;
};
