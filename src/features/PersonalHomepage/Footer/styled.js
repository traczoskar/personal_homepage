import styled from "styled-components";

export const Caption = styled.p`
  text-align: left;
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.slategray};
`;

export const Email = styled.a`
  font-size: 32px;
  font-weight: 900;
  text-decoration: none;
  margin-bottom: 24px;
  transition: 0.3s ease;
  color: ${({ theme }) => theme.color.mineshaft};

  &:hover {
    color: ${({ theme }) => theme.color.scienceblue};
  }
`;

export const Description = styled.p`
  text-align: left;
  font-weight: 400;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 56px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.slategray};
`;

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin-right: 525px;
  margin-bottom: 109px;
`;
