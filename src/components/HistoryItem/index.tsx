import {
  Container,
  Footer,
  HistoryItemDate,
  HistoryItemLink,
  Title,
  Type,
} from "@components/HistoryItem/styles";
import { QueryParams } from "@hooks/useQueryParams";
import { ROUTE } from "@routes/Root";
import { IHistoryItem } from "@tps/history";
import { format } from "date-fns";
import { FC } from "react";
import "twin.macro";

interface Props {
  item: IHistoryItem;
}

const HistoryItem: FC<Props> = ({ item }) => {
  return (
    <Container title={`Query: ${item.query}`}>
      <HistoryItemLink
        to={`${ROUTE.SEARCH}?${QueryParams.QUERY}=${item.query}&${QueryParams.TYPE}=${item.type}`}
      >
        <Title>{item.query}</Title>
        <Footer>
          <Type>{item.type}</Type>

          <HistoryItemDate>
            Created on{" "}
            {format(new Date(item.created_at), "dd.MM.yyyy HH:mm:ss")}
          </HistoryItemDate>
        </Footer>
      </HistoryItemLink>
    </Container>
  );
};

export default HistoryItem;
