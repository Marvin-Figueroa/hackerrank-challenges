/*
Plus Minus

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
*/

function plusMinus(arr) {
  const frecuency = {
    positives: 0,
    negatives: 0,
    zeros: 0,
  };

  arr.forEach((element) => {
    if (element === 0) frecuency.zeros++;
    else if (element < 0) frecuency.negatives++;
    else frecuency.positives++;
  });

  Object.values(frecuency).forEach((value) =>
    console.log((value / arr.length).toFixed(6))
  );
}

plusMinus([1, 1, 0, -1, -1]);
plusMinus([-4, 3, -9, 0, 4, 1]);
