const items = ["pen", "book", "note book", "pencile"];
const target = "pencile";
let found = false;

for(let i=0; i <= items.length; i++){
    if(items[i] === target){
        found = true;
    }
}

console.log(found);