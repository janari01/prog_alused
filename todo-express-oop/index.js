import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.get('/json-test', (req, res) => {
    res.send({
        message: 'success'
    })
})

app.listen(3000, () => {
    console.log('Server running')
})