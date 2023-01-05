import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme.colors.titleColor};
    font-size: 18px;
    font-weight: bold;
  }

  input {
    padding: 8px;

    background-color: transparent;
    border-right: none;

    color: ${(props) => props.theme.colors.titleColor};
    font-size: 1rem;
    font-weight: bold;

    &::placeholder {
      color: ${(props) => props.theme.colors.placeholderColor};
    }
  }

  @media (min-width: ${(props) => props.theme.screens.xl}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  max-width: 250px;

  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.placeholderColor};

  transition: border-bottom 0.2s;

  &:focus {
    outline: none;
    border-bottom-color: ${(props) => props.theme.colors.titleColor};
  }
`;

export const NumberInput = styled.div<{ isFocused: boolean }>`
  border-bottom: 2px solid
    ${(props) =>
      props.isFocused
        ? props.theme.colors.titleColor
        : props.theme.colors.placeholderColor};

  transition: border-bottom 0.2s;

  button {
    background-color: transparent;

    color: ${(props) => props.theme.colors.placeholderColor};
  }

  input {
    border: none;
    width: 34px;

    &:focus {
      outline: none;
    }
  }
`;
