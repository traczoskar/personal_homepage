import styled from "styled-components";
import { ReactComponent as DiscIcon } from "../../assets/disc.svg";
import { SubHeader } from "../SubHeader";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;
  padding: 0;
  margin-top: 32px;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  line-height: 1.4;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    line-height: 1.3;
  }
`;

export const Disc = styled(DiscIcon)`
  height: auto;
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.basic};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 7px;
    margin-right: 8px;
  }
`;

export const StyledSubHeader = styled(SubHeader)`
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-bottom: 12px;
  }
`;
