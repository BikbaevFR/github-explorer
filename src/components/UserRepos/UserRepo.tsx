import {
  RepoCalendarSVG,
  RepoContainer,
  RepoDescription,
  RepoFooter,
  RepoLanguage,
  RepoNameContainer,
  RepoNameLink,
} from "@components/UserRepos/styles";
import { IRepo } from "@tps/repos";
import { format } from "date-fns";
import { FC } from "react";
import "twin.macro";

interface Props {
  repo: IRepo;
}

const UserRepo: FC<Props> = ({ repo }) => {
  return (
    <RepoContainer>
      <RepoNameContainer>
        <RepoNameLink to={`/repo/${repo.full_name}`}>
          <h3>{repo.name}</h3>
        </RepoNameLink>
      </RepoNameContainer>

      {repo.description ? (
        <RepoDescription>{repo.description}</RepoDescription>
      ) : null}

      <RepoFooter>
        {repo.language ? <RepoLanguage>{repo.language}</RepoLanguage> : null}

        <div tw="mr-1">
          <RepoCalendarSVG
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </RepoCalendarSVG>
        </div>
        <p>Updated on {format(new Date(repo.updated_at), "dd MMMM")}</p>
      </RepoFooter>
    </RepoContainer>
  );
};

export default UserRepo;
