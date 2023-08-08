const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "hdh9078",
    password: "ghkdehdgk9078@",
    database: "kdt9"
});
conn.connect((err) => {
    if(err) {
        console.log(err);
        return;
    };
    console.log("connect");
});

exports.getUser = (callback) => {
    const query = "SELECT * FROM user";
    conn.query(query, (err, rows) => {
        callback(rows);
    });
};

exports.postUser = (data, callback) => {
    const query = `INSERT INTO user (name, userid, pw) VALUES ("${data.name}", ${data.id}, "${data.pw}")`
    conn.query(query, (err, rows) => {
        if(err) {
            console.log(err);
            return;
        };
        callback(rows);
    });
};