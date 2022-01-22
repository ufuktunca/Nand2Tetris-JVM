export class Memory {
  push(ramLocation: number): string {
    return `@${ramLocation}\nD=A\n@0\nA=M\nM=D\n@0\nM=M+1\n`;
  }

  decide(line: string): string {
    if (line.includes("push")) {
      return this.push(parseInt(line.split(" ")[2], 10));
    }
  }
}
