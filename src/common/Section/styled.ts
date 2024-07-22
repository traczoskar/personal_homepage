import styled from "styled-components";

export const Section = styled.section`
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-bottom: 72px;
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 48px;
    padding: 16px;
  }
`;
