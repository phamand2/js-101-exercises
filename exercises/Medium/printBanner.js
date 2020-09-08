function printBanner(text){
  for (let i = 0; i < 3; i++){
      if (i === 0 || i === 2){
          console.log('*'.repeat(text.length + 4));
      } else {
          console.log('* ' + text + ' *');
      }
  }
}

printBanner('Welcome to DigitalCrafts')