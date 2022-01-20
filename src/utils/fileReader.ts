import * as fs from "fs";

export function readFile(fileLocation: string): string[] {
  const lines = [];
  fs.readFile(fileLocation, (err, data) => {
    if (err) {
      throw err;
    }
    const arr = data.toString().replace(/\r\n/g, "\n").split("\n");

    for (const i of arr) {
      if (i.split("//")[0].trim().length > 0) {
        console.log("");
        lines.push(i.split("//")[0].trim());
      }
    }
  });
  return lines;
}
