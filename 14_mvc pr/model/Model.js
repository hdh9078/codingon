const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

//임시데이터
const comments = [
    {
        id: 1,
        name: "jae",
        gender: "남",
        major: "컴퓨터"
    },
    {
        id: 2,
        name: "ha",
        gender: "여",
        major: "컴퓨터"
    },
    {
        id: 3,
        name: "won",
        gender: "남",
        major: "기계"
    },
    {
        id: 4,
        name: "goo",
        gender: "남",
        major: "경영",
    },
    {
        id: 5,
        name: "min",
        gender: "여",
        major: "화학"
    }
];

module.exports = comments;