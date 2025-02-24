"use strict";
// 5. Create a function named `countVowels` that takes a string as a parameter.
//    The function should return the number of vowels (a, e, i, o, u) in the string.
//    Use TypeScript types to ensure the parameter and return type are properly typed.
function countVowels(word) {
    const vowels = new Set(["a", "i", "u", "e", "o"]);
    let vowelCount = 0;
    const lowerWord = word.toLowerCase();
    for (let char of lowerWord) {
        if (vowels.has(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}
// Expected output:
console.log(countVowels("hello")); // 2
console.log(countVowels("typescript")); // 2
