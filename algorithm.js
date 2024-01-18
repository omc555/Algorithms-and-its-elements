// Function to count the number of vowels 
function countVowels(sentence) { 
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0; for (let i = 0; i < sentence.length; i++)
    { if (vowels.includes(sentence[i].toLowerCase())) {
        count++; } }
        
        return count; 
} 

// Read the sentence
const sentence = prompt("Enter a sentence: "); 

 // Initialize counters

let length = 0; let wordCount = 0; 

 // Iterate through each character in the sentence 
for (let i = 0; i < sentence.length; i++) { 
    length++; 
    if (sentence[i] === " ") { 
        wordCount++; }
} 

// Add 1 to word count for the last word in the sentence 
wordCount++;

// Count the number of vowels 

const vowelCount = countVowels(sentence); 

// Print the results 
console.log("Length of the sentence:", length); 
console.log("Number of words in the sentence:", wordCount);
console.log("Number of vowels in the sentence:", vowelCount);