// const person = {
//   name: "John Doe",
//  age: 30,
//   city: "New York",
// };
// console.log(person.name);


// function sum(){
//     return 5 + 3;
// }
// console.log(sum());


function sum(x) {
    
    if(x < 5){
         return x+2
    }

    else if(x>5){
        return x-2
    }
    else{
        return 0;
    }
}
const result = sum(10);
console.log(result);