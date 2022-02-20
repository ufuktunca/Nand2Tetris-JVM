import { Points } from "../utils/points";

export class Memory {
  points: Points;

  constructor() {
    this.points = Points.getInstance();
  }

  constant(ramLocation: number): string {
    return `@${ramLocation}\nD=A\n@0\nA=M\nM=D\n@0\nM=M+1\n`;
  }

  memory(expression: string, memoryType: string, ramLocation: number): string {
    if (expression === "push") {
      return `@${
        this.points.getVariable(memoryType) + ramLocation
      }\nD=M\n@0\nA=M\nM=D\n@0\nM=M+1\n`;
    }

    return `@0\nM=M-1\nA=M\nD=M\n@${
      this.points.getVariable(memoryType) + ramLocation
    }\nM=D\n`;
  }

  decide(line: string): string {
    const parsedLine = line.split(" ");
    const ramLocation = parseInt(parsedLine[2], 10);

    if (line.includes("constant")) {
      return this.constant(ramLocation);
    }

    return this.memory(parsedLine[0], parsedLine[1], ramLocation);
  }
}
