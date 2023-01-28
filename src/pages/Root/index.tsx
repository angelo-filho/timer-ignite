import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { CyclesContextProvider } from "../../context/CyclesContext";
import { Container, Wrapper } from "./styles";

interface RootProps {}

export function Root({}: RootProps) {
  return (
    <Wrapper>
      <Container>
        <Header />

        <CyclesContextProvider>
          <Outlet />
        </CyclesContextProvider>
      </Container>
    </Wrapper>
  );
}
