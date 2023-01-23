import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 48px;

  img {
    width: 40px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 32px;

    list-style: none;
  }
`;
