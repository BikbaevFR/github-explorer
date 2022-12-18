import {
  ButtonWrap,
  Container,
  List,
  NotFound,
  NotFoundMark,
} from "@components/SearchList/styles";
import SearchRepo from "@components/SearchRepo";
import SearchUser from "@components/SearchUser";
import ShowMore from "@components/ShowMore";
import { SearchResponse, SearchType, SearchTypes } from "@tps/search";
import { FC } from "react";
import "twin.macro";

const searchItems = {
  [SearchTypes.USERS]: SearchUser,
  [SearchTypes.REPOSITORIES]: SearchRepo,
};

interface Props {
  list: SearchResponse[];
  isLoading: boolean;
  isSuccess: boolean;
  hasNextPage: boolean;
  query: string;
  onShowMoreClick: () => void;
  type: SearchType;
}

const SearchList: FC<Props> = ({
  list,
  isLoading,
  isSuccess,
  onShowMoreClick,
  hasNextPage,
  query,
  type,
}) => {
  const Item = searchItems[type];

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
            <List type={type}>
              {list.map((item) => (
                <Item key={item.id} item={item} />
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
