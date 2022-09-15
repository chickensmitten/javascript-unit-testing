import { extractEnteredNumberValues } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateResultText, outputResult } from './src/output.js';

const form = document.querySelector('form');


function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form);

  // when using let, it could mean that we should refactor. 
  // i.e. `let result` below has been refactored to `const result`
  const result = calculateResult(numberValues);
  const resultText = generateResultText(result);

  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
