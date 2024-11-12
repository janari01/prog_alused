require('dotenv').config()
const express = require('express')
const app = express()

const db = require('./utils/db')


const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).send('not found')
})

app.get('/', (req, res) => {
    res.json({message: 'shit'})
})

app.listen(3000)