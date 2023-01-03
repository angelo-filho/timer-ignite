import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, Wrapper } from "./styles";

interface RootProps {}

export function Root({}: RootProps) {
  return (
    <Wrapper>
      <Container>
        <Header />

        <Outlet />
      </Container>
    </Wrapper>
  );
}
