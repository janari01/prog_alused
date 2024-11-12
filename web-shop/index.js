require('dotenv').config()
const express = require('express')
const app = express()

const path = require('path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))

app.use(shopRoutes)
app.use(adminRoutes)

app.use((req, res, next) => {
    res.status(404).render('err')
})

app.listen(3000)