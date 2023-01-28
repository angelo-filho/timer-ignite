import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    gap: 1rem;

    font-family: "Roboto Mono", monospace;
    color: ${(props) => props.theme.colors.mainGreen};
    font-size: 10rem;
    line-height: 8rem;

    span {
      font-family: inherit;
      padding: 2rem 1rem;

      background-color: ${(props) => props.theme.colors.timerNumberBgColor};
      border-radius: 8px;

      color: ${(props) => props.theme.colors.titleColor};
    }
  }
`;

export const Separator = styled.div`
  font-family: inherit;
  padding: 2rem 0;
  color: ${(props) => props.theme.colors.mainGreen};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
