const numbers = [2,3,4,5,6,7,8,9,20];
const output = []

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    const result = number * number;
    output.push(result);
}
console.log(output);