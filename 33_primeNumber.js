const  num = 13;
let isPrime = true;

if(num < 2){
    isPrime = false;
}else{
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            isPrime = false;
        }
    }
}

console.log(isPrime ? "Number is prime" : "Number is't prime");