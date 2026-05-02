const express = require('express')

const app =express()

app.use(express.json())

const homeRoute = require('./routes/home')
const studentRoute = require('./routes/student')
const courseRoute = require('./routes/course')

app.use('/',homeRoute)
app.use('/student',studentRoute)
app.use('/course',courseRoute)

app.use((req,res)=>{
     res.status(404).send('Page not found.')
})

app.listen(3000,()=>{
     console.log('Server is running on port 3000')
})