require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.URI)

sequelize
  .authenticate()
  .then(() => {
    console.log('connected to db')
  })
  .catch(err => {
    console.error(err)
  })

const articleRouter = require('./routes/article')
app.use('/', articleRouter)
app.use('/article', articleRouter)
app.use('/author', articleRouter)
app.use('/admin/article', articleRouter)

app.listen(3000, () => console.log('localhost 3000'))