import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3.5rem;
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 800px;

    th {
      background-color: ${(props) => props.theme.colors.dividerColor};
      color: ${(props) => props.theme.colors.titleColor};
      font-weight: bold;
      text-align: start;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 0.5rem;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 0.5rem;
        padding-left: 1.5rem;
      }
    }

    td,
    th {
      padding: 1rem;

      font-size: 0.875rem;
    }

    td {
      background-color: ${(props) => props.theme.colors.timerNumberBgColor};
      border-top: 4px solid ${(props) => props.theme.colors.elementColor};

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-left: 1.5rem;
      }
    }
  }
`;

const STATUS_COLORS = {
  completed: "mainGreen",
  interrupted: "red",
  ongoing: "orange",
} as const;

interface StatusProps {
  status: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;

    border-radius: 50%;
    background-color: ${(props) =>
      props.theme.colors[STATUS_COLORS[props.status]]};
  }
`;
