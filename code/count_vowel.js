let text = "my name is sadi";
let count = 0; 
 
for (let i = 0; i < text.length; i++) { 
    const character = text[i].toLowerCase(); 
 
    if ( 
        character === "a" || 
        character === "e" || 
        character === "i" || 
        character === "o" || 
        character === "u" 
    ) { 
        count++; 
    } 
} 
 
console.log("The number of vowels is: " + count); 