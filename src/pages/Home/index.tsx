import { TimerForm } from "../../components/TimerForm";
import { Container } from "./styles";

interface HomeProps {}

export function Home({}: HomeProps) {
  return (
    <Container>
      <TimerForm />
    </Container>
  );
}
