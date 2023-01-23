import { NavLink as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(RouterLink)`
  display: flex;
`;

export const LinkChildren = styled.span<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;
  color: ${(props) =>
    props.active
      ? props.theme.colors.mainGreen
      : props.theme.colors.titleColor};
`;
