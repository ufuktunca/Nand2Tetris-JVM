export class Arithmatics {
  add(): string {
    return `
      @0
      A=M
      D=M
      A=A-1
      M=M+D
      @0
      M=M-1
      `;
  }

  calculate(line: string): string {
    if (line.includes("add")) {
      return this.add();
    }
  }
}
