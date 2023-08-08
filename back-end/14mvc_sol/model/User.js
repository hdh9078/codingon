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

exports.post_signup = (data, callback) => {
    const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
    conn.query(query, (err, rows) => {
        console.log("post_signup", rows)
        callback();
    });
}

exports.post_signin = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
    conn.query(query, (err, rows) => {
        console.log("post_signin", rows);
        callback(rows);
    });
};