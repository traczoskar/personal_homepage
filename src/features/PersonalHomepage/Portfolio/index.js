import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "../personalHomepageSlice";
import { gitHubUsername } from "./gitHubUsername";
import { Content } from "./Content";
import { Header, MyRecentProjects, Section, StyledGitHubIcon } from "./styled";
import { SubHeader } from "../../../common/SubHeader";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const repositoriesSatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(gitHubUsername));
  }, [dispatch]);

  return (
    <Section>
      <Header>
        <StyledGitHubIcon />
        <SubHeader>Portfolio</SubHeader>
        <MyRecentProjects>My recent projects</MyRecentProjects>
      </Header>
      <Content status={repositoriesSatus} repositories={repositories} />
    </Section>
  );
};
