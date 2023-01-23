import styled from "styled-components";

export const Wrapper = styled.div`
  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 80px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1120px;
  min-height: 744px;
  margin: 0 auto;
  padding: 0 16px;

  background-color: ${(props) => props.theme.colors.elementColor};

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 0 40px;
  }
`;
