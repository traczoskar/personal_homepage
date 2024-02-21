import styled from "styled-components";

export const Title = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.color.slategray};
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 38px;
`;

export const Description = styled.p`
  text-align: justify;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.slategray};
`;
