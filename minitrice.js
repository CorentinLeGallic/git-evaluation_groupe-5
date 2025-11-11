#!/usr/bin/env node

const readline = require("readline/promises");

const OPERATORS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const getReadlineInterface = () => {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
};

const handleSyntaxError = (line) => {
  console.log("Erreur de syntax pour le calcul : ", line);
  process.exit(1);
};

const getSplittedLine = (line) => {
  for(const operator in OPERATORS) {
    if(!line.includes(operator)) continue;
    
    const [a, b] = line.split(operator);

    if(a.trim().length === 0 || isNaN(a)) handleSyntaxError(line);
    if(b.trim().length === 0 || isNaN(b)) handleSyntaxError(line);

    return {
      operator: operator,
      a: +a,
      b: +b,
    };
  }

  handleSyntaxError(line);
};

const computeAndShowResult = (line) => {
  const { operator, a, b } = getSplittedLine(line);

  const computeFunction = OPERATORS[operator];
  const result = computeFunction(a, b);

  console.log(result);
};

const runInteractiveMode = () => {
  const readlineInterface = getReadlineInterface();

  readlineInterface.prompt();

  readlineInterface.on("line", (line) => {
    computeAndShowResult(line);
    readlineInterface.prompt();
  });

  readlineInterface.on("close", () => {
    console.log("\nFin des calculs");
  });
};

const runStdinMode = () => {
  const readlineInterface = getReadlineInterface();

  readlineInterface.on("line", (line) => {
    computeAndShowResult(line);
  });
};

if(process.stdin.isTTY) {
  // Interactive mode
  runInteractiveMode();
}
 else {
  // STDIN
  runStdinMode();
}
