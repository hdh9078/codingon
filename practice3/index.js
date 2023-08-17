const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = 'y5c1n79bQ9LxMoiaIn4vb9u2WkomhviT';

const userInfo = { id: 'kdt9', pw: '1234', name: '홍길동' };

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/login', (req, res) => {
    res.render('login');
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});