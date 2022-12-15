import SearchItem from "@components/SearchItem";
import {
  ButtonWrap,
  Container,
  List,
  NotFound,
  NotFoundMark,
} from "@components/SearchList/styles";
import ShowMore from "@components/ShowMore";
import { ISearchUser } from "@tps/search";
import { FC } from "react";
import "twin.macro";

interface Props {
  list: ISearchUser[];
  isLoading: boolean;
  isSuccess: boolean;
  hasNextPage: boolean;
  query: string;
  onShowMoreClick: () => void;
}

const SearchList: FC<Props> = ({
  list,
  isLoading,
  isSuccess,
  onShowMoreClick,
  hasNextPage,
  query,
}) => {
  return (
    <>
      {isSuccess ? (
        <Container>
          {list.length === 0 ? (
            <NotFound>
              We couldn’t find any results matching{" "}
              <NotFoundMark>{`'${query}'`}</NotFoundMark>
            </NotFound>
          ) : null}

          {list.length ? (
            <List>
              {list.map((item) => (
                <SearchItem key={item.id} item={item} />
              ))}
            </List>
          ) : null}

          {hasNextPage ? (
            <ButtonWrap>
              <ShowMore isLoading={isLoading} onClick={onShowMoreClick} />
            </ButtonWrap>
          ) : null}
        </Container>
      ) : null}
    </>
  );
};

export default SearchList;
