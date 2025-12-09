let arr = [1,2,3,4,10,20,30,35];
let target = 40;
let found = false;

for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
        found = true;
    }
}

console.log(found ? "Targeted value are founded." : "Targeted value aren't founded.");