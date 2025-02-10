const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({message: 'welcome'})
})

app.listen(3000, () => console.log('localhost 3000'))