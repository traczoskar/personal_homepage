import styled from "styled-components";

export const Button = styled.a`
  display: inline-flex;
  text-decoration: none;
  align-items: center;
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.basic};
  padding: 12px 16px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.buttonLink.text};
  font-size: 20px;
  font-weight: 600;
  margin-top: 32px;
  transition: box-shadow 0.3s;
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;
