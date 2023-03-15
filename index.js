var express = require('express');
var dotenv = require('dotenv').config();
var cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', async (req, res) =>{
    req.query.code;
    var url = 'https://github.com/login/oauth/access_token';
    var params = "?client_id="+CLIENT_ID+"&client_secret="+CLIENT_SECRET+"&code="+req.query.code;
    await fetch(url+params, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        res.json(data);
    });
});

app.get('/getUserData', async (req, res) =>{
    req.get('Authorization');
    var url = 'https://api.github.com/user';

    await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': req.get('Authorization')
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        res.json(data);
    });
});

app.listen(PORT, function () {
  console.log('App listening on port '+PORT);
});
