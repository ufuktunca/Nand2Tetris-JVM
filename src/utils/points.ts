export class Points {
  static instance: Points;
  private points = new Map<string, number>([
    ["stack", 256],
    ["staticVariables", 16],
    ["temp", 5],
    ["generalPurpose", 13],
    ["SP", 0],
    ["local", 300],
    ["argument", 400],
    ["this", 3000],
    ["that", 3010],
  ]);

  private constructor() {}

  public static getInstance(): Points {
    if (!Points.instance) {
      Points.instance = new Points();
    }
    return Points.instance;
  }

  public push(variableName: string) {
    this.points.set(variableName, this.points.get(variableName) + 1);
  }

  public getVariable(variableName: string): number {
    return this.points.get(variableName);
  }

  public pop(variableName: string) {
    this.points.set(variableName, this.points.get(variableName) - 1);
  }
}
