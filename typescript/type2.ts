//interface ***
interface Student {
    name: string,
    grade: number,
    isPassed?: boolean; //선택하고 싶은 옵션은 ? 붙여주기
}

let persons: Student = {
    name: "dongha",
    grade: 1,
    isPassed: true,
};

let persons2: Student = {
    name: "dongha",
    grade: 1,
    isPassed: true,
};

//배열
let persons3: Student[] = [{
    name: "dongha",
    grade: 1,
    isPassed: true,
}];



/*-----------------------------------------*/
//type
type Gender= "Female" | "male" | "Boy" | "Girl";
const gender: Gender = "Boy";
