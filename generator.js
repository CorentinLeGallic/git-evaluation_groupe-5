#!/usr/bin/env node

const MIN_NUMBER = 1;
const MAX_NUMBER = 1000;
const OPERATORS = ["+", "-", "*", "/"];

const handleError = (errorMessage) => {
  console.log(errorMessage);
  process.exit(1);
};

const generateRandomExpression = () => {
  const a = Math.floor(Math.random() * 999) + 1;
  const b = Math.floor(Math.random() * 999) + 1;
  const operator = OPERATORS[Math.floor(Math.random() * 4)];

  return `${a}${operator}${b}`;
};

const main = () => {
  const expressionsCountRequired = process.argv[2];

  if(!expressionsCountRequired) handleError("An expressionsCount parameter is required");
  if(isNaN(expressionsCountRequired) || +expressionsCountRequired < 0) handleError("The expressionsCount parameter must be a positive number");
  
  for(let i = 0; i < expressionsCountRequired; i++) {
    console.log(generateRandomExpression());
  }
};

main();
