import styled from "styled-components";

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
