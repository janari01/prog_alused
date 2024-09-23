const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const key = '3e897ea34de3ab8f83acad63eaee3c1b'
let city = 'Tartu'


const weather = url => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            let des = data.weather[0].description
            let city = data.name
            let temp = Math.round(parseFloat(data.main.temp) - 273.15)

            let result = {
                des: des,
                city: city, 
                temp: temp
            }
            resolve(result)
        })
        .catch(err => {
            reject(err)
        })
    })
} 

app.all('/', (req, res) => {
    let city
    if (req.method === 'GET') {
        city = 'Tartu'
    } 
    if (req.method === 'POST') {
        city = req.body.cityname
    } 

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

    weather(url).then(data => {res.render('default', data)})
})

app.listen(3000)