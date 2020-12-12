const number = [3, 4, 5, 6, 7, 8];
// const output = [];

// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }


// function square(element){
//     return element * element;
// }
// //map 3 ta peramitar nite pare like element, index, array
// const result = number.map(function(element, index, array){
//     return element * element;
// })

//easy way

// const result = number.map(x => x * x);

// console.log(result)

//filter ar use filter like a chakuni
const result = number.filter( x => x < 5);
console.log(result)


