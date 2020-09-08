function leetSpeak(string){
  string = string.toLowerCase();
  let newString = '';
  for (let i = 0; i < string.length; i++){
      switch (string[i]){
          case 'a':
              newString += '4';
              break;
          case 'e':
              newString += '3';
              break;
          case 'g':
              newString += '6';
              break;
          case 'i':
              newString += '1';
              break;
          case 'o':
              newString += '0';
              break;
          case 's':
              newString += '5';
              break;
          case 't':
              newString += '7';
              break;
          default:
              newString += string[i];
      }
      
  }
  console.log(newString);
}

leetSpeak('Andrew');