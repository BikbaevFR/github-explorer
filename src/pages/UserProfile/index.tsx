import Header from "@components/Header";
import UserInfo from "@components/UserInfo";
import UserRepos from "@components/UserRepos";
import { useUserInfo, useUserRepos } from "@hooks/useFetch";
import ScrollToTop from "@layouts/ScrollToTop";
import Wrapper from "@layouts/Wrapper";
import { Background, Container } from "@pages/UserProfile/styles";
import { useParams } from "react-router-dom";
import "twin.macro";

const UserProfile = () => {
  const { login } = useParams();

  const [userInfo, isLoadingUserInfo] = useUserInfo(login);

  const {
    repos,
    isLoadingRepos,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useUserRepos(login);

  return (
    <ScrollToTop>
      <Wrapper>
        <Header />

        <Container>
          <Background>
            <UserInfo userInfo={userInfo} isLoading={isLoadingUserInfo} />
            <UserRepos
              login={login}
              repos={repos}
              onShowMoreClick={fetchNextPage}
              hasNextPage={hasNextPage}
              isLoading={isLoadingRepos}
              isFetchingNextPage={isFetchingNextPage}
            />
          </Background>
        </Container>
      </Wrapper>
    </ScrollToTop>
  );
};

export default UserProfile;
