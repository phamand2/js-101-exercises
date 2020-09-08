var prompt = require('prompt-sync')()


function splitAmount(){
  let amount = Number(prompt('How much was the bill? '))
  let serviceLevel = prompt('Rate your level of service from Good, Fair or Bad: ').toLowerCase()
  let guestAmount = Number(prompt('How many guests are splitting the amount? '))
  
  if (serviceLevel === 'good'){
    return `The total is $${(amount * .2 + amount)/guestAmount} per guest.`;}
  else if (serviceLevel === 'fair'){
    return `The total is $${(amount * .15 + amount)/guestAmount} per guest.`;}
  else {
    return `The total is $${(amount * .1 + amount)/guestAmount} per guest.`
  }



  }

console.log(splitAmount())