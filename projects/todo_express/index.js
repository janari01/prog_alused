const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

app.set('view-engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//app.use('/js', express.static('js'))
//app.use(express.static(path.join(__dirname, './public')))
//app.use(express.static(path.join(__dirname, 'js')))
app.use(express.urlencoded({ extended: true }));

const readFile = filename => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err)
                return
            }
            // console.log(data)
            const tasks = JSON.parse(data)
            resolve(tasks)
        })
    })
}

const writeFile = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, 'utf-8', err => {
            if (err) {
                reject(err)
                return
            }

            resolve(true)
        })
    })
}


app.get('/', (req, res) => {

    readFile('./tasks.json').then(tasks => {
        res.render('index.ejs', {tasks: tasks, error: null})
    })
})

app.get('/update-task/insert', (req, res) => {
    let {id, tasktext} = req.query  
    id = parseInt(id)
    if (tasktext.length){
        readFile('./tasks.json')
        .then(tasks => {
            tasks.forEach((task, i) => {
                if (task.id === id) {
                    tasks[i] = { id, task: tasktext };
    
                    const data = JSON.stringify(tasks, null, 2);
                    writeFile('./tasks.json', data)
                }
            })
        })
        res.json(true)
    } else{
        res.json(false)
    } 
    
})

app.get('/update-task/:id', (req, res) => {
    //let {id, task} = req.query  
    let id = req.params.id
    
    res.render('edit.ejs',{id: id, error: null} )
})



app.post('/', (req, res) => {
    let error = null
    if (req.body.task.trim().length === 0) {
        error = 'Please insert data'
        readFile('./tasks.json')
        .then(tasks => {
            res.render('index.ejs', {
                tasks: tasks,
                error: error
            })
        })
    } else {
        readFile('./tasks.json').then(tasks => {
            let index = 0

            !tasks.length ? index = 0 : index = tasks[tasks.length - 1].id + 1
            const newTask = {
                "id": index,
                "task": req.body.task
            }
            tasks.push(newTask)
            const data = JSON.stringify(tasks, null, 2)
            writeFile('./tasks.json', data)
            res.redirect('/')
        })
    }
})

app.get('/delete-task/:taskId', (req, res) => {
    let deletedTaskId = req.params.taskId

    readFile('./tasks.json')
    .then(tasks => {
        tasks.forEach((task, i) => {
            if (task.id === parseInt(deletedTaskId)) {
                tasks.splice(i, 1)
            }
        })

        const data = JSON.stringify(tasks, null, 2)
        writeFile('./tasks.json', data)
        res.redirect('/')
    })
})

app.get('/delete-tasks', (req, res) => {
    // loeb json faili
    readFile('./tasks.json')
    .then(tasks => {
        // writeFile funktsioon kirjutab kõik json objektid tühja maatriksiga üle
        writeFile('./tasks.json', "[]")

        // suuname root lehele, nii näeb muudatusi
        res.redirect('/')
    })
})

const port = 3000
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})