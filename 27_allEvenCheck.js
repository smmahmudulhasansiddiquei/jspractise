const arr = [2, 4, 6, 8];
let allEven = true;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    allEven = false;
  }
}

console.log("All even?", allEven);
