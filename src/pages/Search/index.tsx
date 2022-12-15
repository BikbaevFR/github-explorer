import Header from "@components/Header";
import SearchInput from "@components/SearchInput";
import SearchList from "@components/SearchList";
import Spinner from "@components/Spinner";
import { useSearch } from "@hooks/useFetch";
import ScrollToTop from "@layouts/ScrollToTop";
import Wrapper from "@layouts/Wrapper";
import { Background, Container, SpinnerContainer } from "@pages/Search/styles";
import { ROUTE } from "@routes/Root";
import { useHistoryStore } from "@store/useHistoryStore";
import { useSearchStore } from "@store/useSearchStore";
import { IHistoryItem } from "@tps/history";
import { SearchTypes } from "@tps/search";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "twin.macro";
import { v4 as uuidv4 } from "uuid";

const Search: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  const { setHistoryList } = useHistoryStore();
  const { query, setQuery } = useSearchStore();
  const { type, setType } = useSearchStore();

  const [searchValue, setSearchValue] = useState<string>(q ?? "");

  const {
    searchList,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
    enable,
  } = useSearch(query);

  useEffect(() => {
    if (q) {
      setQuery(q);
      enable();
    }
  }, []);

  const saveSearchRequest = (query: string): void => {
    const request: IHistoryItem = {
      id: uuidv4(),
      query,
      created_at: Date.now(),
      type: SearchTypes.USERS,
    };

    setHistoryList(request);
  };

  const search = (): void => {
    setQuery(searchValue);
    enable();

    saveSearchRequest(searchValue);

    if (q) {
      searchParams.delete("q");
      setSearchParams(searchParams);
    }
  };

  return (
    <ScrollToTop>
      <Wrapper>
        <Header activeLink={ROUTE.SEARCH} />

        <Container>
          <Background>
            <SearchInput
              type={type}
              setType={setType}
              setSearchValue={setSearchValue}
              onSubmit={search}
            />

            {isFetching && !isFetchingNextPage ? (
              <SpinnerContainer>
                <Spinner size="xl" />
              </SpinnerContainer>
            ) : (
              <SearchList
                list={searchList}
                isLoading={isFetchingNextPage}
                onShowMoreClick={fetchNextPage}
                hasNextPage={hasNextPage}
                isSuccess={isSuccess}
                query={query}
              />
            )}
          </Background>
        </Container>
      </Wrapper>
    </ScrollToTop>
  );
};

export default Search;
