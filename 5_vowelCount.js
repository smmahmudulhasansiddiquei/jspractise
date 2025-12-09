const text = "MAhmudul hasan siddiqueI";
let count = 0;
let space = 0;

for(let i = 1; i < text.length; i++){
    ch = text[i];
    if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" || ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U"){
        count++;
    }
}

console.log("Vowel count in this text is: " + count);
console.log("constant: " + (text.length - count));