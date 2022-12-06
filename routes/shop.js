const express  = require('express');
const router = express.Router();

router.use('/',(req,res,next)=>{
    console.log('3...in another middleware!');
    res.send('<h1>hello from express</h1>')
})

module.exports = router;