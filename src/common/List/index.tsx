import { Disc, StyledList, ListItem, StyledSubHeader } from "./styled";
import { Icon } from "../Icon";
import { FC } from "react";

interface ListProps {
  skills: string[];
  title: string;
  icon: string;
}

export const List: FC<ListProps> = ({ skills, title, icon }) => {
  return (
    <>
      <StyledSubHeader>
        {title}
        <Icon>{icon}</Icon>
      </StyledSubHeader>
      <StyledList>
        {skills.map((skill) => (
          <ListItem key={skill}>
            <Disc />
            {skill}
          </ListItem>
        ))}
      </StyledList>
    </>
  );
};
