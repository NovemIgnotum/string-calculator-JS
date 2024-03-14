export function stringCalculator(input: string): number {
  const numbers = input.match(/\d+/g);

  if (!numbers) {
    return 0;
  }
  const parsedNumbers = numbers.map((num) => parseInt(num));
  const negativeNumbers = parsedNumbers.filter((num) => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
  }

  const filteredNumbers = parsedNumbers.filter((num) => num <= 1000);
  const result = filteredNumbers.reduce((sum, num) => sum + num, 0);

  return result;
}
