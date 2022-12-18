import Avatar from "@components/Avatar";
import Spinner from "@components/Spinner";
import InfoRow from "@components/UserInfo/InfoRow";
import { InfoRowIcon } from "@components/UserInfo/InfoRowIcon";
import {
  InfoBlock,
  InfoRowContainer,
  InfoRowIconContainer,
  InfoSubTitle,
  InfoTitleLink,
  Section,
  SpinnerContainer,
} from "@components/UserInfo/styles";
import { ReactComponent as RepoSVG } from "@static/img/repo.svg";
import { IUserInfo } from "@tps/user";
import { FC } from "react";
import "twin.macro";

interface Props {
  userInfo: IUserInfo | null;
  isLoading: boolean;
}

const UserInfo: FC<Props> = ({ userInfo, isLoading }) => {
  return (
    <Section>
      <Avatar url={userInfo?.avatar_url} size="mobile-lg" />

      {isLoading ? (
        <SpinnerContainer>
          <Spinner size="xl" />
        </SpinnerContainer>
      ) : (
        <InfoBlock>
          <div tw="mb-3">
            <div tw="mb-1">
              <InfoTitleLink target="_blank" href={userInfo?.html_url}>
                <h2>{userInfo?.name ? userInfo?.name : userInfo?.login}</h2>
              </InfoTitleLink>
            </div>

            {userInfo?.name ? (
              <InfoSubTitle>{userInfo?.login}</InfoSubTitle>
            ) : null}
          </div>

          <InfoRowContainer>
            <InfoRowIconContainer>
              <InfoRowIcon prop="users" />
            </InfoRowIconContainer>
            {userInfo?.followers} followers | {userInfo?.following} following
          </InfoRowContainer>

          <InfoRowContainer>
            <InfoRowIconContainer>
              <div>
                <RepoSVG />
              </div>
            </InfoRowIconContainer>
            {userInfo?.public_repos} repos
          </InfoRowContainer>

          <InfoRow prop="email" value={userInfo?.email} />
          <InfoRow prop="location" value={userInfo?.location} />
          <InfoRow prop="blog" value={userInfo?.blog} />
          <InfoRow prop="company" value={userInfo?.company} />
        </InfoBlock>
      )}
    </Section>
  );
};

export default UserInfo;
