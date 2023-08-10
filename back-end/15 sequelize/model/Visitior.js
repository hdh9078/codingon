
// exports.getVisitoers = () => {
//     return [
//         {
//             id: 1,
//             name: "홍길동",
//             comment: "내가왔다"
//         },
//         {
//             id: 2,
//             name: "이찬혁",
//             comment: "으라차차"
//         },
//     ]
// }
const mysql = require("mysql");
//mysql연결
const conn = mysql.createConnection({
    host: "localhost",
    user: "hdh9078",
    password: "ghkdehdgk9078@",
    database: "kdt9"
});
conn.connect((err) => {
    if(err) {
        console.log("error");
        return;
    }
    console.log("connect");
});

exports.getVisitors = (callback) => {
    const query = "SELECT * FROM visitor"; //db의 visitor 값을 가져온다
    conn.query(query, (err, rows) => {
        console.log(rows);
        callback(rows);
    });
};

exports.getVisitor = (id, callback) => {
    const query = `SELECT * FROM visitor WHERE id=${id}`;
    conn.query(query, (err, rows) => {
        if(err) {
            console.log(err);
            return;
        };
        callback(rows);
    });
};

exports.postVisitor = (data, callback) => {
    const query = `INSERT INTO visitor (name, comment) VALUES ("${data.name}", "${data.comment}")`
    conn.query(query, (err, rows) => {
        if(err) {
            console.log(err);
            return;
        };
        callback(rows);
        
    });
};

exports.patchVisitor = (data, callback) => {
    const query = `UPDATE visitor SET name="${data.name}", comment="${data.comment}" WHERE id=${data.id}`;
    conn.query(query, (err, rows) => {
        console.log("rows", rows);
        if(err) {
            console.log(err);
            return;
        }
        callback();
    });
};

exports.deleteVisitor = (data, callback) => {
    const query = `DELETE FROM visitor WHERE id=${data.id}`;
    conn.query(query, (err, rows) => {
        if(err) {
            console.log(err);
            res.send({result: false});
            return;
        }
        callback();
    });
}