import styled from "styled-components";
import { ReactComponent as MessageIcon } from "../../../../assets/message_icon.svg";

export const Title = styled.span`
  font-weight: 700;
  font-size: 12px;
  letter-spacing: initial;
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.colors.textBasic};
  margin: 12px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const Description = styled.p`
  text-align: justify;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  margin: 36px 0 0 0;
  max-width: 580px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-top: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    max-width: 570px;
  }
`;

export const StyledIcon = styled(MessageIcon)`
  margin-right: 16px;
`;
