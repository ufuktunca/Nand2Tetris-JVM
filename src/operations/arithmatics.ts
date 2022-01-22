export class Arithmatics {
  add(): string {
    return `@0\nA=M\nD=M\nA=A-1\nM=M+D\n@0\nM=M-1`;
  }

  calculate(line: string): string {
    if (line.includes("add")) {
      return this.add();
    }
  }
}
