import styled from "styled-components";

export const Wrapper = styled.header`
  margin-top: -30px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 64px;
  margin-bottom: 73px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-gap: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const Photo = styled.img`
  max-width: 398px;
  width: 30vw;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 132px;
  }
`;
