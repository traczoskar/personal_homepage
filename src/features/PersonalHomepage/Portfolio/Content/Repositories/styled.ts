import styled from "styled-components";

export const List = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
  grid-gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`;

export const Tile = styled.li`
  padding: 56px;
  margin: 0;
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  transition: border-color 0.3s;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 4px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.tile.borderHover};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 20px;
  }
`;

export const Name = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.tile.header};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  line-height: 1.4;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    margin-top: 16px;
  }
`;

export const Links = styled.dl`
  margin-top: 24px;
  margin-bottom: 0;
  display: grid;
  grid-gap: 8px;
  line-height: 1.6;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    margin-top: 16px;
  }
`;

export const LinksRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
  margin: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.basic};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.basic};
  padding-bottom: 1px;

  &:hover {
    border-color: unset;
  }
`;
