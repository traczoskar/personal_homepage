import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "../../assets/sun_icon.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background: none;
  display: flex;
  align-items: center;
  color: inherit;
  border: none;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Box = styled.span`
  border: 1px solid;
  padding: 3px;
  border-radius: 12px;
  width: 48px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.themeSwitch.background};
`;

export const IconWrapper = styled.span`
  background-color: currentColor;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  transition: transform 0.3s;

  ${({ changeposition }) =>
    changeposition &&
    css`
      transform: translateX(20px) rotate(180deg);
    `}
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
