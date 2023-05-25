const reqUrl = "https://api.meaningcloud.com/sentiment-2.1";
const FormData = require('form-data');
const fs = require('fs');
const fetch = require("node-fetch");


//Prepare form data to get Sentiment Analysis
const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.API_KEY;

// Setup empty JS object to act as endpoint for all routes
projectData = {};

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

//POST route
app.post('/textAnalysis', analyzeText);

const dataList = [];
var reqStatus = 0;

function analyzeText(req, res) {

    console.log(req.body);

    const formdata = new FormData();
    formdata.append("key", API_KEY);
    formdata.append("txt", req.body.txt);
    formdata.append("lang", req.body.lang);  // 2-letter code, like en es fr ...

    console.log(formdata);

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    getSentimentAnalysis(reqUrl, requestOptions)
    .then(function(data) {
        res.send(data);
    })
}


