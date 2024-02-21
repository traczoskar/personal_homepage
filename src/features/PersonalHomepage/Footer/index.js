import { personalData } from "../../../dataStore";
import { SocialIcons } from "./SocialIcons";
import {
  Address,
  Caption,
  Description,
  Email,
  EmailWrapper,
  Wrapper,
} from "./styled";

export const Footer = () => {
  return (
    <Wrapper>
      <Address>
        <Caption>LET'S TALK!</Caption>
        <EmailWrapper>
          <Email href="mailto:traczoskar@gmail.com">{personalData.email}</Email>
        </EmailWrapper>
        <Description>{personalData.description}</Description>
        <SocialIcons />
      </Address>
    </Wrapper>
  );
};
