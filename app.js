const express = require('express');
const app = express();
const https = require('https');

app.use(express.urlencoded())

app.set('view engine', 'hbs');

app.get("/", (req, res) => {
    const randomLength = Math.floor(Math.random() * 20) + 8;
    
    https.get(`https://random.justyy.workers.dev/api/random/?cached&n=${randomLength}`, (response) => {
        response.on('data', (data) => {
            res.render('index', {randomPassword: data})
        })
    })
});

app.post("/login", (req, res) => {
    res.render('login', {user: req.body.name, userName: req.body.name});
});

app.listen(80, () => {
    console.log("Server started on Port 80");
});