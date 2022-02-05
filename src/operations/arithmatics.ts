export class Arithmatics {
  add(): string {
    return `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=M+D\n@0\nM=M-1\n`;
  }

  eq(): string {
    return `@0\n
    A=M\n
    A=A-1\n
    D=M\n
    A=A-1\n
    D=D+M\n
    @TRUE\n
    D;JGE\n
    @FALSE\n
    (TRUE)\n
    M=1\n
    @INCREASE-ADDRESS\n
    (FALSE)\n
    M=-1\n
    (INCREASE-ADDRESS)\n
    @0\n
    M=M+1\n
    `;
  }

  calculate(line: string): string {
    if (line.includes("add")) {
      return this.add();
    }

    if (line.includes("eq")) {
      return this.eq();
    }
  }
}
