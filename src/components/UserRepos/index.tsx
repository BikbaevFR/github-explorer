import ShowMore from "@components/ShowMore";
import Spinner from "@components/Spinner";
import UserRepo from "@components/UserRepos/UserRepo";
import {
  List,
  NotFound,
  NotFoundMark,
  Section,
  ShowMoreContainer,
  SpinnerContainer,
} from "@components/UserRepos/styles";
import { IRepo } from "@tps/repos";
import { FC } from "react";
import "twin.macro";

interface Props {
  login: string | undefined;
  repos: IRepo[];
  onShowMoreClick: () => void;
  hasNextPage: boolean | undefined;
  isLoading: boolean;
  isFetchingNextPage: boolean;
}

const UserRepos: FC<Props> = ({
  login,
  repos,
  onShowMoreClick,
  hasNextPage,
  isLoading,
  isFetchingNextPage,
}) => {
  return (
    <Section>
      {isLoading ? (
        <SpinnerContainer>
          <Spinner size="xl" />
        </SpinnerContainer>
      ) : (
        <>
          {!repos.length ? (
            <NotFound>
              <NotFoundMark>{login}</NotFoundMark> doesn’t have any public
              repositories yet.
            </NotFound>
          ) : null}

          {repos.length ? (
            <>
              <List>
                {repos.map((repo) => (
                  <UserRepo key={repo.id} repo={repo} />
                ))}
              </List>

              {hasNextPage ? (
                <ShowMoreContainer>
                  <ShowMore
                    isLoading={isFetchingNextPage}
                    onClick={onShowMoreClick}
                  />
                </ShowMoreContainer>
              ) : null}
            </>
          ) : null}
        </>
      )}
    </Section>
  );
};

export default UserRepos;
