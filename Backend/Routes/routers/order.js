const express = require('express')

const router= express.Router()

router.get('/',(req,res)=>{
     res.send("oreder list")
})

router.post('/',(req,res)=>{
     res.send("oreder created.")
})


module.exports=router