let str = "I Love You Very mucH";
let caps = 0;

for(let i = 0; i < str.length; i++){
  if(str[i] >= "A" && str[i] <= "Z"){
    caps++;
  }
}

console.log(caps);