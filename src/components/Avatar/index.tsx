import { Container } from "@components/Avatar/styles";
import { ReactComponent as UserSVG } from "@static/img/user.svg";
import { FC } from "react";
import "twin.macro";

interface Props {
  url?: string;
  size?: string;
}

const Avatar: FC<Props> = ({ url, size = "" }) => {
  return (
    <Container size={size}>
      {url ? <img src={url} alt="avatar" /> : <UserSVG />}
    </Container>
  );
};

export default Avatar;
