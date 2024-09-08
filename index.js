const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
app.set('view-engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res) => {

    fs.readFile('./tasks', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(data)
        const tasks = data.split('\n')
        res.render('index.ejs', {tasks: tasks})
    })
})


const port = 3000
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})