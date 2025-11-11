#!/usr/bin/env node

const readline = require("readline/promises");

const OPERATORS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => {
    if(b === 0) handleError("Division par zéro");

    return a / b;
  },
};

const getReadlineInterface = () => {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
};

const handleError = (errorMessage) => {
  console.log(errorMessage);
  process.exit(1);
};

const getSplittedLine = (line) => {
  for(const operator in OPERATORS) {
    if(!line.includes(operator)) continue;
    
    const [a, b] = line.split(operator);

    if(a.trim().length === 0 || isNaN(a) || +a < 0) handleError("Erreur de syntax pour le calcul : " + line);
    if(b.trim().length === 0 || isNaN(b) || +b < 0) handleError("Erreur de syntax pour le calcul : " + line);

    return {
      operator: operator,
      a: +a,
      b: +b,
    };
  }

  handleError("Erreur de syntax pour le calcul : " + line);
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
