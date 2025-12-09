let num = 123546;
let sum = 0;
let str = num.toString();

for(let i = 0; i < str.length; i++){
    sum = sum + Number(str[i]);
}

console.log(sum);