import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 48px 40px 0;

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
