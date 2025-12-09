let str = "I love js. Js is a strong language. How nice the language js is!"
let count = 0;
let word = "";

for(let i = 0; i < str.length; i++){
    if(str[i] !== " " && str[i] !== "." && str[i] !== "!"){
        word = word + str[i];
    }else{
        if(word.toLowerCase() === "js"){
            count++;
        }
        word = "";
    }
}

console.log("Total count of js is = ",count);