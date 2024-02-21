import { List } from "../../../common/List";
import { toLearnList } from "../../../dataStore";

export const ToLearn = () => {
  return (
    <List skills={toLearnList} title="What I want to learn next" icon="🚀" />
  );
};
