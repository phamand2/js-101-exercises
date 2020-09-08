function printBox(width, height){
  for(let i= 1; i <= height; i++){
    if(i === 1 || i == height) {
      console.log('*'.repeat(width))
    } else {
      console.log('*' + ' '.repeat(width-2) + '*')
    }
  }
}

printBox(6, 4)