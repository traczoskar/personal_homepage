import { personalData } from "../../dataStore";
import { SocialIcons } from "./SocialIcons";
import { Caption, Description, Email, Wrapper } from "./styled";

export const Footer = () => {
  return (
    <Wrapper>
      <Caption>LET'S TALK!</Caption>
      <Email href="mailto:traczoskar@gmail.com">{personalData.email}</Email>
      <Description>{personalData.description}</Description>
      <SocialIcons />
    </Wrapper>
  );
};
