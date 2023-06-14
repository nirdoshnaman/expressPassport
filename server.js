const express = require('express')
const app = express()

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'Naman'})
})

app.get('/login', (req, res) => {
    res.render('login.ejs', {name: 'Naman'})
})

app.post('/login', (req, res) =>{
    res.send('post login')
})

app.get('/register', (req, res) => {
    res.render('register.ejs', {name: 'Naman'})
})

app.post('/register', (req, res) =>{
    res.send('post register')
})


app.listen(5000)