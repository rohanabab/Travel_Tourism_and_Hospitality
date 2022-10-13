const express = require('express')
const mongoose = require ('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/travel',{useNewUrlParser: true, useUnifiedTopology: true})

const connection = mongoose.connection

connection.once('open',() =>console.log("connected to mongoDB"))

const app = express()

app.use(cors());
app.use(bodyParser.json());
const port = process.env.port || 3000;

const booknow=require('./Routes/booknowroute');
const signup=require('./Routes/signuproute');

app.use('/booknow',booknow);
app.use('/signup',signup);

app.listen(port, () => console.log(`running on the server ${port}`));