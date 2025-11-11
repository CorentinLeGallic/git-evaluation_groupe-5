#!/usr/bin/env node

const readline = require("readline/promises");

const OPERATORS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const getSplittedLine = (line) => {
  for(const operator in OPERATORS) {
    if(!line.includes(operator)) continue;
    
    const [a, b] = line.split(operator);

    return {
      operator: operator,
      a: +a,
      b: +b,
    };
  }
};

const runInteractiveMode = async () => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readlineInterface.prompt();

  readlineInterface.on("line", (line) => {
    const { operator, a, b } = getSplittedLine(line);

    const computeFunction = OPERATORS[operator];
    const result = computeFunction(a, b);

    console.log(result);
  
    readlineInterface.prompt();
  });

  readlineInterface.on("close", () => {
    console.log("\nFin des calculs");
  });
};

runInteractiveMode();