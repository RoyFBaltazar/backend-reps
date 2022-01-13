const express = require('express')
const port = 3000
const bodyParser = require('body-parser') 
const catRoute = require('./catroute')
const app = express()
app.use(bodyParser.json())
app.use('/catbook',catRoute)

app.get('/', (req, res) =>{res.status(200).json({message:"api up"})})

app.listen(port, () =>{
    console.log("live!")
})