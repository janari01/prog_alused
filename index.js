const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

app.set('view-engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));

const readFile = filename => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err)
                return
            }
            // console.log(data)
            const tasks = data.split('\n')
            resolve(tasks)
        })
    })
}


app.get('/', (req, res) => {

    readFile('./tasks').then(tasks => {
        res.render('index.ejs', {tasks: tasks})
    })
})

app.post('/', (req, res) => {
    readFile('./tasks').then(tasks => {
        tasks.push(req.body.task)
        const data = tasks.join('\n')
        fs.writeFile('./tasks', data, err => {
            if (err) {
                console.error(err)
                return
            }
            res.redirect('/')
        })
    })
})


const port = 3000
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})