import Header from "@components/Header";
import SearchInput from "@components/SearchInput";
import SearchList from "@components/SearchList";
import Spinner from "@components/Spinner";
import { useSearch } from "@hooks/useFetch";
import { useQueryParams } from "@hooks/useQueryParams";
import { useSaveSearchHistory } from "@hooks/useSaveSearchHistory";
import ScrollToTop from "@layouts/ScrollToTop";
import Wrapper from "@layouts/Wrapper";
import { Background, Container, SpinnerContainer } from "@pages/Search/styles";
import { ROUTE } from "@routes/Root";
import { useSearchStore } from "@store/useSearchStore";
import { SearchType } from "@tps/search";
import { FC, useState } from "react";
import "twin.macro";

const Search: FC = () => {
  const [deleteParams] = useQueryParams();

  const { query, setQuery } = useSearchStore();
  const { type, setType } = useSearchStore();

  const [searchValue, setSearchValue] = useState<string>(query);
  const [searchType, setSearchType] = useState<SearchType>(type);

  const {
    searchList,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSearch(query, type);
  const [saveSearchHistory] = useSaveSearchHistory();

  const search = (): void => {
    setQuery(searchValue);
    setType(searchType);

    saveSearchHistory(searchValue, searchType);
    deleteParams();
  };

  return (
    <ScrollToTop>
      <Wrapper>
        <Header activeLink={ROUTE.SEARCH} />

        <Container>
          <Background>
            <SearchInput
              type={searchType}
              setType={setSearchType}
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
                type={type}
              />
            )}
          </Background>
        </Container>
      </Wrapper>
    </ScrollToTop>
  );
};

export default Search;
