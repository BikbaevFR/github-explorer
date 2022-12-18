import Header from "@components/Header";
import Spinner from "@components/Spinner";
import { useRepoInfo } from "@hooks/useFetch";
import ScrollToTop from "@layouts/ScrollToTop";
import Wrapper from "@layouts/Wrapper";
import {
  Background,
  Container,
  Count,
  CountIcon,
  CountNum,
  CountText,
  Counts,
  Description,
  Head,
  Language,
  Owner,
  OwnerLink,
  RepoLink,
  SpinnerContainer,
  Title,
  UpdatedDate,
} from "@pages/Repo/styles";
import { ReactComponent as ForkSVG } from "@static/img/fork.svg";
import { ReactComponent as StarSVG } from "@static/img/star.svg";
import { ReactComponent as WatchSVG } from "@static/img/watch.svg";
import { formatCount } from "@utils/index";
import { format } from "date-fns";
import { FC } from "react";
import { useParams } from "react-router-dom";
import "twin.macro";

const Repo: FC = () => {
  const { login, repoName } = useParams();

  const [repoInfo, isLoading] = useRepoInfo(login, repoName);

  return (
    <ScrollToTop>
      <Wrapper>
        <Header />

        <Container>
          <Background>
            {isLoading ? (
              <SpinnerContainer>
                <Spinner size="xl" />
              </SpinnerContainer>
            ) : (
              <>
                <Head>
                  <Title>
                    <RepoLink target="_blank" href={repoInfo?.html_url}>
                      {repoInfo?.full_name}
                    </RepoLink>
                  </Title>

                  <Counts>
                    <Count>
                      <CountIcon>
                        <WatchSVG />
                      </CountIcon>
                      <CountText>Watch</CountText>
                      <CountNum>
                        {formatCount(repoInfo?.watchers_count)}
                      </CountNum>
                    </Count>

                    <Count>
                      <CountIcon>
                        <ForkSVG />
                      </CountIcon>
                      <CountText>Fork</CountText>
                      <CountNum>{formatCount(repoInfo?.forks_count)}</CountNum>
                    </Count>

                    <Count>
                      <CountIcon>
                        <StarSVG />
                      </CountIcon>
                      <CountText>Star</CountText>
                      <CountNum>
                        {formatCount(repoInfo?.stargazers_count)}
                      </CountNum>
                    </Count>
                  </Counts>
                </Head>

                {repoInfo?.description ? (
                  <Description>{repoInfo?.description}</Description>
                ) : null}

                {repoInfo?.language ? (
                  <Language> {repoInfo?.language}</Language>
                ) : null}

                {repoInfo?.updated_at ? (
                  <UpdatedDate>
                    Updated on{" "}
                    {format(new Date(repoInfo?.updated_at), "LLLL dd, yyyy")}
                  </UpdatedDate>
                ) : null}

                {repoInfo?.owner.login ? (
                  <Owner>
                    Owner &#8212;{" "}
                    <OwnerLink to={`/user/${repoInfo?.owner.login}`}>
                      {repoInfo?.owner.login}
                    </OwnerLink>
                  </Owner>
                ) : null}
              </>
            )}
          </Background>
        </Container>
      </Wrapper>
    </ScrollToTop>
  );
};

export default Repo;
