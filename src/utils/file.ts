import * as fs from "fs";

export function readFile(fileLocation: string): string[] {
  const lines = [];
  const data = fs.readFileSync(fileLocation, "utf-8");

  const arr = data.split("\n");

  for (const i of arr) {
    if (i.split("//")[0].trim().length > 0) {
      lines.push(i.split("//")[0].trim());
    }
  }

  return lines;
}

export function writeFile(content: string, fileName: string) {
  fs.writeFileSync(fileName, content);
}
