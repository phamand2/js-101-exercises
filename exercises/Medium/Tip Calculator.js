var prompt = require('prompt-sync')()


function tipCalculator(){
  let amount = prompt('How much was the bill? ')
  let serviceLevel = prompt('Rate your level of service from Good, Fair or Bad: ').toLowerCase()
  
  if (serviceLevel === 'good'){
    return amount * .2;}
  else if (serviceLevel === 'fair'){
    return amount * .15;}
  else {
    return amount * .1
  }

  }


console.log(tipCalculator())