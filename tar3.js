const num = [4, 0, 2, 0, 5, 7, 0, 2, 0];
let count = 0;

for (let i = 0; i < num.length; i++) count += num[i] == 0 ? 1 : 0;

console.log(count);
