import { StyledIcon, StyledButton } from "./styled";

export const Button = ({ title }) => {
  return (
    <StyledButton>
      <StyledIcon />
      {title}
    </StyledButton>
  );
};
