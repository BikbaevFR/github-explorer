import Header from "@components/Header";
import ScrollToTop from "@layouts/ScrollToTop";
import Wrapper from "@layouts/Wrapper";
import { Background, Container } from "@pages/Repo/styles";
import { FC } from "react";
import "twin.macro";

const Repo: FC = () => {
  console.log("repo");

  return (
    <ScrollToTop>
      <Wrapper>
        <Header />

        <Container>
          <Background>
            <h1 tw="text-xl font-bold">Repo</h1>
          </Background>
        </Container>
      </Wrapper>
    </ScrollToTop>
  );
};

export default Repo;
