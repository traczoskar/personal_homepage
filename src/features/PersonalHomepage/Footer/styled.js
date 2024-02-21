import styled from "styled-components";

export const Caption = styled.h2`
  text-align: left;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: initial;
  margin-bottom: 24px;
`;

export const Address = styled.address`
  font-style: unset;
`;

export const EmailWrapper = styled.div`
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 12px 0;
  }
`;
export const Email = styled.a`
  font-size: 32px;
  font-weight: 900;
  text-decoration: none;
  transition: 0.3s ease;
  color: ${({ theme }) => theme.colors.textBasic};

  &:hover {
    color: ${({ theme }) => theme.colors.basic};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  max-width: 670px;
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textBasic};
  margin-top: 0;
  line-height: 1.4;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const Wrapper = styled.footer`
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;
