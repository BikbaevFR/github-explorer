import Avatar from "@components/Avatar";
import { Container, ItemLink, Text } from "@components/SearchItem/styles";
import { ISearchUser } from "@tps/search";
import { FC } from "react";
import "twin.macro";

interface Props {
  item: ISearchUser;
}

const SearchItem: FC<Props> = ({ item }) => {
  return (
    <Container>
      <ItemLink to={`/user/${item.login}`}>
        <Avatar url={item.avatar_url} size="sm" />

        <Text title={item.login}>{item.login}</Text>
      </ItemLink>
    </Container>
  );
};

export default SearchItem;
