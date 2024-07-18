import { Repository } from "../../../../types/types";
import { ErrorComponent } from "./ErrorComponent";
import { Loading } from "./Loading";
import { Repositories } from "./Repositories";

interface ContentProps {
  status: string;
  repositories: Repository[] | null;
}

export const Content: React.FC<ContentProps> = ({ status, repositories }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <Loading />;

    case "error":
      return <ErrorComponent />;

    case "success":
      return <Repositories repositories={repositories} />;

    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
