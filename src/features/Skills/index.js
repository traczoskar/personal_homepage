import { Disc, List, ListItem } from "./styled";
import { skillList } from "../../dataStore";

export const Skills = () => {
  return (
    <List>
      {skillList.map((skill) => (
        <ListItem key={skill}>
          <Disc />
          {skill}
        </ListItem>
      ))}
    </List>
  );
};
