import styled from "styled-components";

export const Container = styled.main`
  max-width: 1248px;
  margin: auto;
  margin-top: 120px;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;
