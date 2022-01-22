import { writeFile, readFile } from "./src/utils/file";
import { operations } from "./src/operations/operations";

const lines = readFile("./SimpleAdd.vm");
let assembly = "";

for (const line of lines) {
  assembly += operations(line);
}

writeFile(assembly, "SimpleAdd.asm");
