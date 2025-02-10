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

app.get('/', (req, res) => {
  res.json({message: 'welcome'})
})

app.listen(3000, () => console.log('localhost 3000'))