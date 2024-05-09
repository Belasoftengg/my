const mysql = require('mysql');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    const sql = "INSERT INTO `lo` (`name`, `email`, `password`) VALUES (?,?,?)";
    db.query(sql, [name, email, password], (err) => {
        if (err) {
            console.error('Error adding user to database: ', err);
            return res.json({ message: 'Error adding user' });
        }
        return res.json({ message: 'User added successfully' });
    });
});
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM lo WHERE `email`=? AND `password`=?";
    db.query(sql, [email, password], (err, data) => {
        if (err) {
            console.error('Error querying database: ', err);
            return res.status(500).json({ message: 'Error querying database' });
        }
        if (data.length > 0) {
            return res.json('success');
        } else {
            return res.json('failed');
        }
    });
});

// app.post('/books', (req, res) => {
//     const sql = "INSERT INTO `books` (`title`, `desc`, `cover`) VALUES (?,?,?)";
// const values=["atwtry","qwerthgfuejfrhfrkgmhrmgrhkr","it is nice"]
//   db.query(sql, [values], (err,data) => {
//         if (err) {
//             return res.json(err);
//         }
//         return res.json("books has been added sucessfully");
//     });
// });











app.listen(8081, () => {
    console.log("Listening on port 8081!");
});