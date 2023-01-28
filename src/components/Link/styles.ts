import { NavLink as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(RouterLink)`
  display: flex;
`;

export const LinkChildren = styled.span<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;
  color: ${(props) =>
    props.active
      ? props.theme.colors.mainGreen
      : props.theme.colors.titleColor};

  &::before {
    content: "";
    position: absolute;
    bottom: -8px;

    width: 130%;
    height: 2px;

    background-color: ${(props) => props.theme.colors.mainGreen};

    transform: scaleX(0);

    transition: transform 0.2s;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;
