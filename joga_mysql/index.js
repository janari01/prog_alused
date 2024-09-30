require('dotenv').config()
const express = require('express')
const app = express()

const path = require('path')

const hbs = require('express-handlebars')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/'
}))

app.use(express.static('public'))

const mysql = require('mysql2')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

console.log(connection)

connection.connect(err => {
    if (err) { throw err }
    console.log('yee')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('active')
})