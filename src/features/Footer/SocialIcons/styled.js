import styled from "styled-components";

export const SocialList = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0;
  padding: 0;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 40px;
  }
`;

export const Item = styled.li``;

export const styleIcon = (Icon) => styled(Icon)`
  height: auto;
`;
