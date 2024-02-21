import styled from "styled-components";

export const SocialList = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0;
  padding: 0;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 40px;
  }
`;

export const Item = styled.li`
  margin-right: 24px;
`;

export const styleIcon = (Icon) => styled(Icon)`
  height: auto;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.textBasic};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.basic};
  }
`;
