import { Link, Outlet } from "react-router-dom";
import { Container, Header } from "./styles";

interface RootProps {}

export function Root({}: RootProps) {
  return (
    <Container>
      <Header>
        <img src="/logo.svg" alt="Logo ignite timer" />

        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/historic"}>Historic</Link>
            </li>
          </ul>
        </nav>
      </Header>

      <Outlet />
    </Container>
  );
}
