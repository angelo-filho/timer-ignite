import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Link } from "../Link";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img src="/logo.svg" alt="Logo ignite timer" />

      <nav>
        <ul>
          <li>
            <Link to="/">
              <Timer size={"1.625rem"} />
            </Link>
          </li>
          <li>
            <Link to={"/history"}>
              <Scroll size={"1.625rem"} />
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
