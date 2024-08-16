/*
Mars Exploration

A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, s , determine how many letters of the SOS message have been changed by radiation.

Example:

s = 'SOSTOT'

The original message was SOSSOS. Two of the message's characters were changed in transit.
*/

function marsExploration(s) {
  const expectedSignal = new Array(s.length / 3).fill("SOS").join("");

  return s
    .split("")
    .reduce(
      (lettersChanged, letter, index) =>
        letter !== expectedSignal[index]
          ? lettersChanged + 1
          : lettersChanged + 0,
      0
    );
}

console.log("Should be 3: ", marsExploration("SOSSPSSQSSOR"));
console.log("Should be 0: ", marsExploration("SOSSOSSOS"));
