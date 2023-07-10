// var : 재선언, 재할당 가능
var number = 5;
var number = 6;
var number1;
number1=9;

// let : 재선언 불, 재할당 가능
let sdsd = "chicken";
console.log(sdsd);
sdsd="chicken + pizza";
console.log(sdsd);

// const : 재선언 불, 재할당 불
const aa = "rrr";


let name = "asd"
const ab = `안녕하세요 제 이름은 ${name}입니다.`
console.log(ab)

// 배열데이터
let fruit = ["apple", "banana", "grape", "orange"];
console.log(fruit[0], fruit[2]); //인덱싱

console.log(fruit.length); //배열의 길이 확인 → 배열 안에 저장되어 있는 값의 개수

fruit.push("tomato"); //배열 마지막에 값을 추가
console.log(fruit);

fruit.pop();//배열 마지막 값을 삭제
console.log("pop", fruit);

fruit.unshift("peach");//배열의 제일 앞에 값을 추가하는 기능
console.log("unshift", fruit);

fruit.shift();//제일 앞의 값을 삭제
console.log("shift", fruit);

fruit.indexOf();//배열안에 "" 몇 번 인덱스에 있는지 알려줌
console.log(fruit.indexOf("orange"));
let qwqw = fruit.indexOf("apple");
console.log(qwqw);

fruit.includes();//값이 포함되어 있는지 판별하는 기능
console.log(fruit.includes("apple"));
let inin = fruit.includes("apple");
console.log(inin);