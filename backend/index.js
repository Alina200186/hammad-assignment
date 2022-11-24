// /**
//  * This is a basic starting point of the assignment
//  * Modify the code according to your own needs and requirements
//  */

// //const express = require('express')
// import express from 'express'; // <-- Module Style import
// import bodyParser from 'body-parser';

// // Importing user route
// import router from './routes/users.js';
// // const router = require('router')

// // const bodyParser = require('body-parser')

// const app = express()
// const port = 3001

// app.use(bodyParser.json())
// // Adding a Router
// app.use('/users', router);

// app.get('/', (req, res) => {
//     res.send('Hello Universe!')
// })

// app.get('/todos', (req, res) => {
//     res.send('A list of todo items will be returned')
// })

// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.send('Posting a Request')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })


const express = require('express')
const cors= require('cors')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const app = express()
dotenv.config({path:'./config.env'})
const Port = process.env.Port;
require('./database/connection')
app.use(express.json());
app.use(cors())
app.use(require('./routes/router'))

const User=require('./models/userSchema')

const middleware=(req,res,next)=>{
    console.log(`Hello from the MiddleWare`)
    next();
}



app.get('/about', middleware,(req, res) => {
    res.send('Hello about from the server')
  })
  app.get('/contact', (req, res) => {
    res.send('Hello contact from the server')
  })
  app.get('/signin', (req, res) => {
    res.send('Hello Login from the server')
  })
  app.get('/signup', (req, res) => {
    res.send('Hello Register from the server')
  })

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
})