import styled from "styled-components";

export const Wrapper = styled.div`
  @media (min-width: 720px) {
    padding: 80px;
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  min-height: 744px;
  margin: 0 auto;

  background-color: ${(props) => props.theme.elementColor};
`;
