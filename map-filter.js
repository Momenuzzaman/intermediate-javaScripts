const numbers = [2,3,4,5,6,7,8,9,10];
// const output = []

// // for(let i = 0; i < numbers.length; i++){
// //     const number = numbers[i];
// //     const result = number * number;
// //     output.push(result);
// // }
// // console.log(output);

// map
 function square(element){
   return element*element;
 }
 const result = numbers.map(function(element){
    return element*element;
});
console.log(result);

const square2 = element=> element*element;
const result2 = numbers.map(element=> element*element);
console.log(result2);




// filter
const bigger = numbers.filter(element => element > 5);
console.log(bigger);
