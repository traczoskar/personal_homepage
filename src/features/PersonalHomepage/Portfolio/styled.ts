import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../../../assets/git_icon.svg";

export const Section = styled.section`
  margin-top: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const StyledGitHubIcon = styled(GitHubIcon)`
  color: ${({ theme }) => theme.colors.basic};
  margin-bottom: 8px;
`;

export const Header = styled.header`
  text-align: center;
`;

export const MyRecentProjects = styled.h3`
  font-weight: 400;
  margin-top: 8px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textBasic};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;
