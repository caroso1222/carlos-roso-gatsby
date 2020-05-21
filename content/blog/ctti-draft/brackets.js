function validateBrackets(equation) {
  const stack = [];
  for (c of equation) {
    if (isOpeningBracket(c)) {
      stack.push(c);
    }
    if (isClosingBracket(c) && !isValidPair(stack.pop(), c)) {
      return false;
    }
  }
  return stack.length === 0;
}

const isValidPair = (open, close) => ['()', '{}', '[]'].indexOf(open + close) !== -1;

const isOpeningBracket = c => '({['.indexOf(c) !== -1;

const isClosingBracket = c => ']})'.indexOf(c) !== -1;

let e1 = '([{}])';
let e2 = '{([{}])()}';

console.log(validateBrackets(e2));
