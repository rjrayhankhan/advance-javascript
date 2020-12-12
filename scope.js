let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    console.log(bonus)

   if(result > 9){
       let mood = "Happy"
       mood = "sad"
       console.log(mood);
   }
   //bahire console log kora jay na
//    console.log(mood);
    return result;
}
const output = sum(3, 7);
console.log(bonus)
console.log(output);