import { useContext } from "react";
import { CyclesContext } from "../context/CyclesContext";

export function useCycles() {
  const cyclesContext = useContext(CyclesContext);

  return cyclesContext;
}
