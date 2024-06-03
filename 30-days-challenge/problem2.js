//Counter

var createCounter = function(n){

    return function(){
       return n++;
    }
    
}
const counter = createCounter(1);
console.log(counter())
console.log(counter())


// function createCounter(n){
//     return function(){
//         return n++;
//     }
   
// }
// const counter = createCounter(1);
// console.log(counter())
// console.log(counter())
