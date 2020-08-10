const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.send('From API Route');
})

module.exports = router