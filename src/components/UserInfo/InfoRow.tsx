import { IconProp, InfoRowIcon } from "@components/UserInfo/InfoRowIcon";
import {
  InfoRowContainer,
  InfoRowIconContainer,
} from "@components/UserInfo/styles";
import { FC } from "react";
import "twin.macro";

interface Props {
  value?: string;
  prop: IconProp;
}

const InfoRow: FC<Props> = ({ value, prop }) => {
  return (
    <>
      {value ? (
        <InfoRowContainer>
          <InfoRowIconContainer>
            <InfoRowIcon prop={prop} />
          </InfoRowIconContainer>
          {value}
        </InfoRowContainer>
      ) : null}
    </>
  );
};
export default InfoRow;
