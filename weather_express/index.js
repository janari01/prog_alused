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

app.get('/', (req, res) => { 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(response => response.json())
    .then(data => {
        let des = data.weather[0].description
        let city = data.name
        let temp = Math.round(parseFloat(data.main.temp) - 273.15)

        res.render('default.ejs', {
            des: des,
            city: city, 
            temp: temp
        })
    })
})

app.post('/', (req, res) => {
    let city = req.body.cityname
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(response => response.json())
    .then(data => {
        let des = data.weather[0].description
        let city = data.name
        let temp = Math.round(parseFloat(data.main.temp) - 273.15)

        res.render('default.ejs', {
            des: des,
            city: city, 
            temp: temp
        })
    })
})

app.listen(3000)