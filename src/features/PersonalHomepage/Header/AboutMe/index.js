import { personalData } from "../../../../dataStore";
import { Button } from "../../Button/index";
import { Description, Name, Title, StyledIcon } from "./styled";

export const AboutMe = () => {
  return (
    <div>
      <Title>THIS IS</Title>
      <Name>
        {personalData.name} {personalData.surname}
      </Name>
      <Description>{personalData.caption}</Description>
      <Button href={`mailto:${personalData.email}`} title={personalData.email}>
        <StyledIcon />
        Hire Me
      </Button>
    </div>
  );
};

//49 minuta Loading
