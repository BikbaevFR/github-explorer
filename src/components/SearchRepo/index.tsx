import {
  Bottom,
  Container,
  Description,
  Language,
  Name,
  RepoLink,
  StarCount,
  StarIconContainer,
  Topic,
  Topics,
  UpdatedDate,
} from "@components/SearchRepo/styles";
import { ReactComponent as StarSVG } from "@static/img/star.svg";
import { ISearchRepo } from "@tps/search";
import { formatStarCount } from "@utils/index";
import { format } from "date-fns";
import { FC } from "react";

interface Props {
  item: ISearchRepo;
}

const SearchRepo: FC<Props> = ({ item }) => {
  return (
    <Container>
      <RepoLink to={`/repo/${item.full_name}`}>
        <Name>{item.full_name}</Name>
      </RepoLink>

      <Description>{item.description}</Description>

      {item.topics.length ? (
        <Topics>
          {item.topics.map((topic, index) => (
            <Topic key={index}>{topic}</Topic>
          ))}
        </Topics>
      ) : null}

      <Bottom>
        {item.stargazers_count ? (
          <StarCount>
            <StarIconContainer>
              <StarSVG />
            </StarIconContainer>
            {formatStarCount(item.stargazers_count)}
          </StarCount>
        ) : null}

        <Language>{item.language}</Language>

        <UpdatedDate>
          Updated on {format(new Date(item.updated_at), "LLLL dd, yyyy")}
        </UpdatedDate>
      </Bottom>
    </Container>
  );
};

export default SearchRepo;
