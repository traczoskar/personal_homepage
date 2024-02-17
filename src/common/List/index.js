import { Disc, StyledList, ListItem } from "./styled";

export const List = ({ skills }) => {
  return (
    <StyledList>
      {skills.map((skill) => (
        <ListItem key={skill}>
          <Disc />
          {skill}
        </ListItem>
      ))}
    </StyledList>
  );
};
