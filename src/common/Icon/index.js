import styled from "styled-components";

export const Icon = styled.span`
  font-size: 30px;
  font-weight: 400;
  margin-left: 16px;
  vertical-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
  }
`;
