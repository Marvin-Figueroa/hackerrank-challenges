/*
Compare the triplets

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

Example:

a = [1, 2, 3]
b = [3, 2, 1]

For elements *0*, Bob is awarded a point because a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second.
*/

function compareTriplets(a, b) {
  const competitorsPoints = [0, 0];

  a.forEach((currentTripletElement, index) => {
    if (currentTripletElement > b[index]) competitorsPoints[0]++;
    if (currentTripletElement < b[index]) competitorsPoints[1]++;
  });

  return competitorsPoints;
}

console.log("Should print [1,1]: ", compareTriplets([1, 2, 3], [3, 2, 1]));
console.log("Should print [2,1]: ", compareTriplets([17, 28, 30], [99, 16, 8]));
