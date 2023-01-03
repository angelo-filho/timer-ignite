import styled from "styled-components";

export const LinkChildren = styled.span<{ active: boolean }>`
  transition: 0.2s;
  color: ${(props) =>
    props.active ? props.theme.mainGreen : props.theme.titleColor};
`;