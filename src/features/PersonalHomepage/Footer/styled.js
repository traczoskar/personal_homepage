import styled from "styled-components";

export const Caption = styled.p`
  text-align: left;
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 24px;
`;

export const Email = styled.a`
  font-size: 32px;
  font-weight: 900;
  text-decoration: none;
  margin-bottom: 24px;
  transition: 0.3s ease;
  color: ${({ theme }) => theme.colors.textBasic};

  &:hover {
    color: ${({ theme }) => theme.colors.basic};
  }
`;

export const Description = styled.p`
  text-align: left;
  font-weight: 400;
  font-size: 18px;
  margin-top: 0;
  line-height: 25px;
`;

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin-right: 525px;
  margin-top: 120px;
  margin-bottom: 109px;
`;
