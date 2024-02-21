import { List } from "../../../common/List";
import { skillList } from "../../../dataStore";

export const Skills = () => {
  return <List skills={skillList} title="My skillset includes" icon="🛠️" />;
};
