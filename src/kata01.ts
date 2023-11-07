export const add = (input: string) => {
  if (input === '') {
    return 0;
  }
  let delimiter: string = ',';
  let multiDelimiter = false;
  while (input.startsWith('//[')) {
    const startIndex = input.indexOf('[');
    const endIndex = input.indexOf(']');
    delimiter = input.substring(startIndex + 1, endIndex);
    input = input.replace(`[${delimiter}]`, '').replaceAll(delimiter, ',');
    multiDelimiter = true;
  }
  if (multiDelimiter && input.startsWith('//')) {
    input = input.substring(3);
  }
  if (!multiDelimiter && input.startsWith('//')) {
    delimiter = input.charAt(2);
    input = input.replaceAll(delimiter, ',').substring(4);
  }

  const numbers: string[] = input.replace('\n', ',').split(',');
  const negativeArray: string[] = [];

  const result = numbers.reduce((acc, cur) => {
    const currentNumber = parseInt(cur);
    if (currentNumber < 0) {
      negativeArray.push(cur);
    }

    return (acc += currentNumber >= 1000 ? 0 : currentNumber);
  }, 0);
  if (negativeArray.length) {
    throw new Error(`negatives not allowed - ${negativeArray.toString()}`);
  }
  return result;
};
