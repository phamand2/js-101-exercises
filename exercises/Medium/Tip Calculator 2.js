var prompt = require('prompt-sync')()


function totalAmount(){
  let amount = Number(prompt('How much was the bill? '))
  let serviceLevel = prompt('Rate your level of service from Good, Fair or Bad: ').toLowerCase()
  
  if (serviceLevel === 'good'){
    return `Your total is $${amount * .2 + amount}.`;}
  else if (serviceLevel === 'fair'){
    return `Your total is $${amount * .15 + amount}.`;}
  else {
    return `Your total is $${amount * .1 + amount}.`
  }



  }

console.log(totalAmount())