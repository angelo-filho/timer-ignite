import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  color: ${(props) => props.theme.colors.titleColor};
  font-size: 1.125rem;
  font-weight: bold;
`;

const BaseInput = styled.input`
  height: 2.5rem;

  background: transparent;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.labelColor};

  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.titleColor};

  padding: 0 0.5rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.colors.mainGreen};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.labelColor};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    gap: 1rem;

    font-family: "Roboto Mono", monospace;
    color: ${(props) => props.theme.colors.mainGreen};
    font-size: 10rem;
    line-height: 8rem;

    span {
      font-family: inherit;
      padding: 2rem 1rem;

      background-color: ${(props) => props.theme.colors.timerNumberBgColor};
      border-radius: 8px;

      color: ${(props) => props.theme.colors.titleColor};
    }
  }
`;

export const Separator = styled.div`
  font-family: inherit;
  padding: 2rem 0;
  color: ${(props) => props.theme.colors.mainGreen};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const StartCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  background-color: ${(props) => props.theme.colors.mainGreen};
  color: ${(props) => props.theme.colors.titleColor};

  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors.sideGreen};
  }
`;
