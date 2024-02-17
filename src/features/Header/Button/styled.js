import styled from "styled-components";
import { ReactComponent as MessageIcon } from "../../../assets/message_icon.svg";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  background-color: ${({ theme }) => theme.color.scienceblue};
  padding: 12px 16px;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  font-weight: 600;
  appearance: none;
  border: 1px solid ${({ theme }) => theme.color.slategray};
`;

export const StyledIcon = styled(MessageIcon)`
  stroke: currentColor;
  margin-right: 16px;
  width: 24px;
  height: 24px;
`;
