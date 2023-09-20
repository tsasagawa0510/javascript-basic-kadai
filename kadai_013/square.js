let num = Math.floor(Math.random() * 20);

console.log('引数で渡した数値は' + num);

// アロー関数
const square = (num) => {
  return num * num;
} 

// 関数
// function squareFun(num) {
//   return num * num;
// }

// 累乗した結果を出力
console.log(square(num));

