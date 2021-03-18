'use strict'
// Please don't delete the 'use strict' line above

// ペア演習
// let a = 5;
// a + 10;
// a; // => 予想：15　正解：5

// let b = 17;
// b = (b + 1) / 2;
// b * 4;
// b; // => 予想：36　正解：9

// let c = 5;
// let d = 20;
// c = d;
// d = d + 7;
// c; // => 予想：27　正解：20
// //c = dでdの値に変更があってもcは影響を受けない

// let e = 10;
// let f = 5;
// e = e * 4 - 3;
// e + 17;
// e = e + f;
// e; // => 予想：42　正解：42


// 基礎演習
const name = "JUNKO"
const age = 33
const isProgrammer = true
let currentTask = "1"
console.log(name); // あなたの名前を表示
console.log(age); // あなたの年齢を表示
console.log(isProgrammer); // "true" を表示
console.log(currentTask); // "1" を表示

// currentTask に 2 を割り当て直してください。
currentTask = "2"
console.log(currentTask)

// 正方形の面積を計算して保存
const squareSideLength = 2;
const squareArea = squareSideLength ** 2
console.log(squareArea); // "4" を表示

// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
const rectangleArea = rectangleBaseLength * rectangleHeightLength
console.log(rectangleArea); // "12" を表示

// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
const triangleArea = triangleBaseLength * triangleHeightLength / 2
console.log(triangleArea); // "10" を表示


// 中級演習
// 円の円周と面積を計算して保存する
const circleDiameter = 10;
// 円周の長さを求める公式は、2×半径×円周率
// circleDiameter = 円の直径 circleCircumference = 円周の長さ
const circleCircumference = 2 * (circleDiameter / 2) * 3.14
console.log(circleCircumference); // "31.41592653589793" に近い値を表示
// 円の面積の公式は半径 × 半径 × 円周率
const circleArea = (circleDiameter / 2) ** 2 * 3.14
console.log(circleArea); // "78.53981633974483" に近い値を表示

let a = "B";
let b = "A";
let c = a
let d = b
a = d
b = c
console.log(a); // "A" を表示
console.log(b); // "B" を表示

//指数関数的増加(Exponential growth)を実装
let value = 1;
console.log(value); // "1" を表示
value = value * 2;
console.log(value); // "2" を表示
value = value ** 2;
console.log(value); // "4" を表示
value = value * 2;
console.log(value); // "8" を表示
value = value * 2;
console.log(value); // "16" を表示
value = value * 2;
console.log(value); // "32" を表示
value = value * 2
console.log(value); // "64" を表示

const firstName = 'Yan';
const lastName = 'Fan';
const city = 'Tokyo';
const intoroduceYourself = `Hello, my name is ${firstName + " " + lastName}. I live in ${city}`
console.log(intoroduceYourself); // "Hello, my name is Yan Fan. I live in Tokyo." を表示

// 応用演習
// counter という関数を宣言します。これが呼び出されたら、常に前回呼び出された時よりも 1 つ大きい数値を console.log で表示しましょう。
let number = 1

function counter() {
  return number ++;
}
console.log(counter()); // => 1
console.log(counter()); // => 2
console.log(counter()); // => 3
// etc.

// isOdd という関数を宣言します。これが呼び出されたら、与えられた数値が奇数かどうかを console.log で表示しましょう。
function isOdd(givenNumber) {
  if (givenNumber % 2 == 0) {
    console.log("No, it's even");
  } else {
    console.log("Yes, it's odd");
  }
  // ここにあなたのコードを書いてください
  // 与えられた数値によって、"Yes, it's odd" もしくは "No, it's even" を表示
}
console.log(isOdd(0))
console.log(isOdd(1))
console.log(isOdd(2))
console.log(isOdd(3))
console.log(isOdd(4))
console.log(isOdd(5))