export class Memory {
  push(ramLocation: number): string {
    return `
        @${ramLocation}
        D=A
        @0
        A=M
        M=D
        @0
        M=M+1
        `;
  }

  decide(line: string): string {
    if (line.includes("push")) {
      return this.push(parseInt(line.split(" ")[1], 10));
    }
  }
}
