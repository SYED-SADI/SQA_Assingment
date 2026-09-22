function sumArray(numbers) { 
let sum = 0; 
for (let i = 0; i < numbers.length; i++) { 
sum = sum + numbers[i]; 
} 
return sum; 
} 
let numbers = [10, 20, 30, 40, 50]; 
let result = sumArray(numbers); 
console.log("Array:", numbers); 
console.log("Sum:", result); 