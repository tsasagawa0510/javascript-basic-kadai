let num 

num = Math.floor(Math.random() *20);



if (num % 3 === 0 && num % 5 === 0 ) {
  console.log('変数' + num + 'は3と5の倍数です');
} else if (num % 3 === 0 ) {
  console.log('変数' + num + 'は3の倍数です');
} else if (num % 5 === 0) {
  console.log('変数' + num + 'は5の倍数です');
} else {
  console.log(num);
} 