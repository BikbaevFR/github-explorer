import { Container } from "@components/Avatar/styles";
import { FC } from "react";
import "twin.macro";

const defaultUrl =
  "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg";

interface Props {
  url?: string;
  size?: string;
}

const Avatar: FC<Props> = ({ url = defaultUrl, size = "" }) => {
  return (
    <Container size={size}>
      <img src={url} alt="avatar" />
    </Container>
  );
};

export default Avatar;
