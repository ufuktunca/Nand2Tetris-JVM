import { Points } from "../utils/points";

export class Memory {
  points: Points;

  constructor() {
    this.points = Points.getInstance();
  }

  constant(ramLocation: number): string {
    return `@${ramLocation}\nD=A\n@0\nA=M\nM=D\n@0\nM=M+1\n`;
  }

  local(expression: string, ramLocation: number): string {
    if (expression === "push") {
      return `@${this.points.getVariable(
        "LCL"
      )}\nA=M+${ramLocation}\nD=M\n@0\nA=M\nM=D\n@0\nM=M+1\n`;
    }

    return `@0\nM=M-1\nA=M\nD=M\n@${this.points.getVariable(
      "LCL"
    )}\nA=M+${ramLocation}\nM=D\n`;
  }

  argument(ramLocation: number): string {
    return `@${ramLocation}\nD=A\n@2\nA=M\nM=D\n@2\nM=M+1\n`;
  }

  decide(line: string): string {
    const parsedLine = line.split(" ");
    const ramLocation = parseInt(parsedLine[2], 10);

    if (line.includes("constant")) {
      return this.constant(ramLocation);
    }

    if (line.includes("local")) {
      return this.local(parsedLine[0], ramLocation);
    }

    if (line.includes("argument")) {
      return this.argument(ramLocation);
    }
  }
}
