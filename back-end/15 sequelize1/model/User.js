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

// exports.get_profile = (id, callback) => {
//     const query = `SELECT * FROM user WHERE id='${id}'`;
//     conn.query(query, (err, rows) => {
//         console.log("profile", rows);
//         callback(rows);
//     })
// }
//
exports.post_profile = (data, callback) => {
    const query = `SELECT *FROM user WHERE userid='${data.userid}'`;
    conn.query(query, (err, rows) => {
        callback(rows);
    })
}

//수정
exports.edit_profile = (data, callback) => {
    const query = `UPDATE user SET name="${data.name}", userid="${data.userid}"  WHERE id=${data.id}`;
    conn.query(query, (err, rows) => {
        console.log("rows", rows);
        if(err) {
            console.log(err);
            return;
        }
        callback();
    });
}

// exports.patchUser = (data, callback) => {
//     const query = `UPDATE user SET name="${data.name}", userid="${data.userid}"  WHERE id=${data.id}`;
//     console.log(data)
//     conn.query(query, (err, rows) => {
//         console.log("rows", rows);
//         if(err) {
//             console.log(err);
//             return;
//         }
//         callback();
//     });
// };

exports.deleteUser = (id, callback) => {
    const query = `DELETE FROM user WHERE id=${id}`;
    conn.query(query, (err, rows) => {
        if(err) {
            console.log(err);
            res.send({result: false});
            return;
        }
        callback();
    });
}