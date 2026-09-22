const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 12, 12, 13, 12]; 
const uniqueNumbers = [...new Set(numbers)]; 
console.log("Original Array:", numbers); 
console.log("Array Without Duplicates:", uniqueNumbers);