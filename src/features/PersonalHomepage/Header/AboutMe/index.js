import { personalData } from "../../../../dataStore";
import { Button } from "../Button";
import { Description, Name, Title } from "./styled";

export const AboutMe = () => {
  return (
    <div>
      <Title>THIS IS</Title>
      <Name>
        {personalData.name} {personalData.surname}
      </Name>
      <Description>{personalData.caption}</Description>
      <Button title="Hire Me" />
    </div>
  );
};
