// Task: Find the sum of all multiples of three and five below a particular number

const sumOfMultiples = (i, sum = 0) => {
  // Base case: If the counter is at zero all the multiples ahve been found, return sum
  if (i === 0) return sum;

  // Else, check if the next sequential number is perfectly divisble,
  // if it is call the function with that integer added to the sum
  if ((i - 1) % 5 === 0 || (i - 1) % 3 === 0) return sumOfMultiples(i - 1, sum + (i - 1));

  // If it is not perfectly divisble, call the function without
  // adding the integer to the sum
  return sumOfMultiples(i - 1, sum);
};

export default sumOfMultiples;
