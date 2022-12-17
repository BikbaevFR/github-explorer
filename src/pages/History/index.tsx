import Header from "@components/Header";
import HistoryList from "@components/HistoryList";
import ScrollToTop from "@layouts/ScrollToTop";
import Wrapper from "@layouts/Wrapper";
import { Background, Container, SearchLink, Text } from "@pages/History/styles";
import { ROUTE } from "@routes/Root";
import { useHistoryStore } from "@store/useHistoryStore";
import { FC } from "react";
import "twin.macro";

const History: FC = () => {
  const { historyList } = useHistoryStore();

  return (
    <ScrollToTop>
      <Wrapper>
        <Header activeLink={ROUTE.HISTORY} />
        <Container>
          <Background>
            {!historyList.length ? (
              <Text>
                History is empty.{" "}
                <SearchLink to={ROUTE.SEARCH}>Go to Search</SearchLink>
              </Text>
            ) : (
              <HistoryList list={historyList} />
            )}
          </Background>
        </Container>
      </Wrapper>
    </ScrollToTop>
  );
};

export default History;
