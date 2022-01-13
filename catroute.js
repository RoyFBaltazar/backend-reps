const express = require('express')
const catRoute = express.Router()
const data = require('./catdata')

catRoute.get('/', (req, res)=>{res.status(200).json({catbook:data})})

catRoute.post('/catbook', (req,res)=>{
    let testdata = req.body.testdata
    data.push(testdata)
    res.status(201).json({message: "sucess"})
})
catRoute.get('/:id', (req,res)=>{
    let id = Number(req.params.id)
   
    if(id >= data.length || id < 0){
        res.status(404).json({message: "please add more data"})
    }
    res.status(200).json({cat: testdata[id]})
})
catRoute.put('/:id', (req,res)=>{
    let id = Number(req.params.id)
    let new_post = req.body
    if(id >= data.length || id < 0){
        res.status(404).json({message: "please add more data"})
    }
    data[id]= new_post
    res.status(201).json({message: "updated", cat: data[id]})
})

module.exports = catRoute