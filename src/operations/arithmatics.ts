export class Arithmatics {
   iteration:number

  constructor(){
    this.iteration=0
  }
  add(): string {
    return `@0\nA=M\nA=A-1\nD=M\nA=A-1\nM=M+D\n@0\nM=M-1\n`;
  }

  eq(): string {
    return `@0\nA=M\nA=A-1\nD=M\nA=A-1\nD=D-M\n@0\nM=M-1\nM=M-1\n@TRUE-${this.iteration}\nD;JEQ\n@FALSE-${this.iteration}\n0;JMP\n(TRUE-${this.iteration})\n@0\nA=M\nM=1\n@INCREASE-ADDRESS-${this.iteration}\n0;JMP\n(FALSE-${this.iteration})\n@0\nA=M\nM=-1\n(INCREASE-ADDRESS-${this.iteration})\n@0\nM=M+1\n`;
  }

  calculate(line: string): string {
    if (line.includes("add")) {
      return this.add();
    }

    if (line.includes("eq")) {
      this.iteration += 1
      return this.eq();
    }
  }
}
