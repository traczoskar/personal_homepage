import styled from "styled-components";
import { ReactComponent as Spinner } from "../../../../../assets/spinner.svg";

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 88px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textBasic};
  display: grid;
  justify-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
    margin-top: 32px;
  }
`;

export const StyledSpinner = styled(Spinner)`
  margin-top: 48px;
  color: ${({ theme }) => theme.colors.basic};
  height: auto;
  animation: rotate 1s linear infinite;

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 32px;
    width: 60px;
  }
`;
