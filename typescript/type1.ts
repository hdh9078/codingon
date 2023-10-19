//튜플
//튜플 타입 선언
let drink : [string, number]

//튜플 초기화
drink = ["coke", 2000];

//튜플의 선언과 초기화
let drink2: [string, number] = ["coke", 2000];

//js배열과 동일하게 인덱스 접근 가능, 메서드 사용 가능
console.log(drink[1]);
//spread 연산자 사용 가능
console.log([...drink2, "콜라"]);

//readonly: 데이터 변경 안되게
let drink3: readonly [string, number] = ["coke", 2000];
// drink3.push("soda"); 오류로 뜸



/*------------------------------------------*/
//열거형

//enum은 기본적으로 0부터 1씩 증가하는 값을 갖는다.
enum Auth {
    admin,
    user,
    guest,
}

//enum은 문자열을 지정해 줄 수 있다. 문자로 했으면 다 문자열로 통일, 초기값 0 넣으면 되지만 실무에서는 통일하여 사용
enum Delivery {
    pending = "pending",
    delivery = "delivery",
    finish = "finish",
};

console.log(Auth.admin)
console.log(Auth.user)
console.log(Auth.guest)
console.log(Delivery.pending)
/*--------------------------------------------*/
//any
let a: any[] = ["1", "2", "3", 1, 2, 3];