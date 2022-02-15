export class Memory {
  constant(ramLocation: number): string {
    return `@${ramLocation}\nD=A\n@0\nA=M\nM=D\n@0\nM=M+1\n`;
  }

  local(ramLocation: number): string {
    return `@${ramLocation}\nD=A\n@1\nA=M\nM=D\n@1\nM=M+1\n`;
  }

  decide(line: string): string {
    const parsedLocation = parseInt(line.split(" ")[2], 10)

    if (line.includes("constant")) {
      return this.constant(parsedLocation);
    }

    if (line.includes("local")) {
      return this.local(parsedLocation);
    }
  }
}
