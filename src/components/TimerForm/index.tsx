import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

import { Container, NumberInput, TextInput } from "./styles";

interface TimerFormProps {}

export function TimerForm({}: TimerFormProps) {
  const [numberInputIsFocused, setNumberInputIsFocused] = useState(false);

  return (
    <Container>
      <p>Vou trabalhar em</p>
      <TextInput type="text" placeholder="Dê um nome para o seu projeto" />
      <p>durante</p>
      <NumberInput isFocused={numberInputIsFocused}>
        <button>
          <Minus size={16} />
        </button>
        <input
          type="text"
          placeholder="00"
          onFocus={() => setNumberInputIsFocused(true)}
          onBlur={() => setNumberInputIsFocused(false)}
        />
        <button>
          <Plus size={16} />
        </button>
      </NumberInput>
      <p>minutos</p>
    </Container>
  );
}
