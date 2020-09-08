// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).
var prompt = require('prompt-sync')()

function madlib(){
  const name = prompt('What is your name? ');
  const subject = prompt('What is your favorite subject? ');
  return `${name}'s favorite subject in school is ${subject}.`

}


console.log(madlib())