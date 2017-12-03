function forLoop(array) {
  for (var i = 0; i < 25; i++ ) {
    if (i === 1) {
      bit = "I am ${i} strange loop";
      array.push(bit)
      }
    else {
      bit = "I am ${i} strange loops";
      array.push(bit)
      }
  }
}

function whileLoop(num) {
  while (num > 0)  {
    console.log(${num});
    num = num - 1
  }

  return 'done' ;
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLopp(array) {
  do {
    array.pop
  }  while (array.length > 0 && maybeTrue())
}
