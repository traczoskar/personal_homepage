import { ReactComponent as ErrorIcon } from "../../../../../assets/error.svg";
import { gitHubUsername } from "../../gitHubUsername";
import { Wrapper, Header, Paragraph } from "./styled";
import { Button } from "../../../Button";

export const ErrorComponent = () => (
  <Wrapper>
    <ErrorIcon />
    <Header>Ooops! Something went&nbsp;wrong...</Header>
    <Paragraph>
      Sorry, failed to load Github&nbsp;projects.
      <br />
      You can check them directly&nbsp;on&nbsp;Github.
    </Paragraph>
    <Button
      href={`https://github.com/${gitHubUsername}`}
      target="_blank"
      rel="noreferrer"
      title={`https://github.com/${gitHubUsername}`}
    >
      Go to Github
    </Button>
  </Wrapper>
);
