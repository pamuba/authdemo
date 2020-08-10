const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const db = "mongodb://localhost:27017/eventsdb"


//connect to db
 mongoose.connect(db, err => {
     if(err){
         console.log("Error!!"+ err)
     }
     else{
         console.log('Connected to mongodb')
     }
 })

router.get('/', function(req, res){
    res.send('From API Route');
})

module.exports = router