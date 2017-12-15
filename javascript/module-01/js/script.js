const upperRow = 'qwertyuiop[]';
const middleRow = 'asdfghjkl;\'';
const lowRow = 'zxcvbnm,./';
const upperRowLength = upperRow.length;
const middleRowLength = middleRow.length;
const lowRowLength = lowRow.length;

let upperRowFirst = upperRow.charAt(0);
let upperRowLast = upperRow.charAt(upperRowLength - 1);
let middleRowFirst = middleRow.charAt(0);
let middleRowLast = middleRow.charAt(middleRowLength - 1);
let lowRowFirst = lowRow.charAt(0);
let lowRowLast = lowRow.charAt(lowRowLength - 1);

let leftBracket = upperRow.indexOf('[');
let rightBracket = upperRow.indexOf(']');

console.log(`First string: ${upperRow}, its length: ${upperRowLength}; Second string: ${middleRow}, its length: ${middleRowLength}; Third string: ${lowRow}, its length: ${lowRowLength}.
First symbol of first string: ${upperRowFirst}, last symbol of first string: ${upperRowLast};
First symbol of second string: ${middleRowFirst}, last symbol of second string: ${middleRowLast};
First symbol of third string: ${lowRowFirst}, last symbol of third string: ${lowRowLast}.  
Index of left bracket: ${leftBracket}, index of right bracket: ${rightBracket}.`);
