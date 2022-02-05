import { Arithmatics } from "./arithmatics";
import { Memory } from "./memory";

const arithmatics = new Arithmatics();
const memory = new Memory();

export function operations(line: string): string {
  if (arithmaticOperation(line)) {
    return arithmatics.calculate(line);
  }
  if (memoryOperation(line)) {
    return memory.decide(line);
  }
}

function arithmaticOperation(line: string): boolean {
  return line.includes("add") || line.includes("eq") || line.includes("lt");
}

function memoryOperation(line: string): boolean {
  return line.includes("push");
}
