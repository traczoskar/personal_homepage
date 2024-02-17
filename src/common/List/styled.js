import styled from "styled-components";
import { ReactComponent as DiscIcon } from "../../assets/disc.svg";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: start;
  gap: 8px;
  column-gap: 115px;
  padding-left: 0;
  margin-top: 32px;
  list-style: none;
  line-height: 25px;
`;

export const ListItem = styled.li`
  font-weight: 400;
  color: ${({ theme }) => theme.color.slategray};
`;

export const Disc = styled(DiscIcon)`
  width: 9px;
  height: 9px;
  margin-right: 7px;
`;
