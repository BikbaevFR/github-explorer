import { Container } from "@layouts/Wrapper/styles";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Wrapper: FC<Props> = (props) => {
  return <Container {...props} />;
};

export default Wrapper;
