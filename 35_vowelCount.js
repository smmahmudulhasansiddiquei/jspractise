let str = "I love my Country";
let vowel = "aeiuoAEIOU";
let count = 0;

for(let i = 0; i < str.length; i++){
    if(vowel.includes(str[i])){
        count++;
    }
}

console.log("Total vowels = ", count);