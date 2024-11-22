const express = require('express')
const app = express()
const morgan = require('morgan')

app.set('view engine','ejs')

app.use(morgan('dev'))

//it will work for every route
// app.use((req,res,next)=>{
//     console.log("Middleware")
//     return next()
// })

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res,next)=>{
    console.log("I am middleware")
    next()
},(req,res)=>{
    res.send('About Page')
})


app.get('/profile',(req,res)=>res.send('Profile Page'))



app.listen(3000)