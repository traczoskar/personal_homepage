import { Disc, StyledList, ListItem, StyledSubHeader } from "./styled";
import { Icon } from "../Icon";

export const List = ({ skills, title, icon }) => {
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
