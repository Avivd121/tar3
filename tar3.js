//Presenter: Aviv Dahan  
// The program counts the number of zeros in an array of numbers.
// It iterates through each element in the array, checks if the element is zero, 
// and increments the counter if true.
// Finally, the program prints the total count of zeros found in the array.

const num = [4, 0, 2, 0, 5, 7, 0, 2, 0];
let count = 0;

for (let i = 0; i < num.length; i++) count += num[i] == 0 ? 1 : 0;

console.log(count);
