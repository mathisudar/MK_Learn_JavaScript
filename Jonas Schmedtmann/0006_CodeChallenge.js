const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark/heightMark**2;
const BMIJohn = massJohn/(heightJohn*heightJohn);
const isMarkHeighBMI = BMIMark > BMIJohn;

console.log(BMIMark,BMIJohn,isMarkHeighBMI);

/*

C:\MATHI\VSCode\02_JAVASCRIPT\Jonas Schmedtmann>node 0006_CodeChallenge.js
27.309968138370508 24.194608809993426 true

*/
