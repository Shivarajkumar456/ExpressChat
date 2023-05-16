const fs = require('fs')
const express = require('express')

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send("<form  action='/'  method='GET' onSubmit='localStorage.setItem(`userName`,document.getElementById(`userName`).value)'><input type='text' name='userName' id='userName'/><button type='submit'>Login</button></form>")
})

router.get('/', (req, res, next) => {
    fs.readFile("database.txt", (err, data) => {
        if (err) {
            console.log(err)
            data = "welcome to chat!"
        }
        res.send(`${data} <form action="/" onSubmit = "document.getElementById('userName').value=localStorage.getItem('userName')" method="Post">
            <input id="msg" name="msg" type="text">
            <input type="hidden" name="userName" id="userName">
            <button type="submit">Send</button>
            </form>`
        )
    })
})

router.post("/", (req, res, next) => {
    console.log(req.body)
    fs.writeFileSync('database.txt', ` ${req.body.userName} : ${req.body.msg} `, { flag: 'a' })
    res.redirect('/');
});

module.exports = router;