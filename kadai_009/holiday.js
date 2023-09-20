
// 配列に祝日を定義
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

console.log('-------------ここからfor文-----------------')
// for文で配列の要素を出力
for (let i = 0; i < holidays.length ; i++) {
  console.log(holidays[i]);
}


// while文
console.log('-------------ここからwhile文-----------------')

// カウンタ用変数用意
let i = 0;
while (i < holidays.length ) {
  console.log(holidays[i]);
  i++;
}

