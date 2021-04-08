const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const library = require('./router/librarydata')
require('./initDB')();

const morgan = require('morgan');
app.use(morgan('tiny'));

var mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;
mongoose.Promise = global.Promise

app.get('/', (req, res) => {
    res.send('API Works')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/library',library)

const port = 2424;
app.listen(port, () => {
    console.log("Sever started on PORT: " +port)
})