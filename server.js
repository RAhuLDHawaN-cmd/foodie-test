const express = require("express");
require("dotenv").config();
const Pizza = require('./models/pizzaModel')
const cors = require("cors");
const app = express();
const db = require("./db.js")
app.use(express.json());
const path = require('path')
const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/' , ordersRoute)


if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}

app.listen(PORT,()=>{
    console.log(`Server start at port no ${PORT}`)
})
