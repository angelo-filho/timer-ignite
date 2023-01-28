import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useCycles } from "../../hooks/useCycles";
import { Container, HistoryList, Status } from "./styles";

export function History() {
  const { cycles, activeCycleId } = useCycles();

  return (
    <Container>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.id === activeCycleId && (
                    <Status status="ongoing">Em andamento</Status>
                  )}
                  {cycle.finishedDate && (
                    <Status status="completed">Concluído</Status>
                  )}
                  {cycle.interruptedDate && (
                    <Status status="interrupted">Interrompido</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </Container>
  );
}
