import * as fs from "fs";

export function readFile(fileLocation: string): string[] {
  let lines: string[];

  fs.readFile(fileLocation, function (err, data) {
    if (err) throw err;

    const arr = data.toString().replace(/\r\n/g, "\n").split("\n");

    for (let i of arr) {
      if (i.split("//")[0].trim().length > 0) {
        lines.push(i.split("//")[0].trim());
      }
    }
  });

  return lines;
}
