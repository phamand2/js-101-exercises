function factor(num){
  let factors = [];
  for(let x = 0; x <= num; x++){
    if (num % x === 0) {
      factors.push(x);
    }
  }
  return factors;
}

console.log(factor(10))