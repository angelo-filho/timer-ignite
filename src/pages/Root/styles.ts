import styled from "styled-components";

export const Container = styled.div`
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

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
`;
