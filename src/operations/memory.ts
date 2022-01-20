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
}
