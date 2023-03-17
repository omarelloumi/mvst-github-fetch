var express = require('express');
var dotenv = require('dotenv').config();
var cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
var bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 5000;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/getAccessToken', async (req, res) =>{
    req.query.code;
    var url = process.env.ACCESS_TOKEN_URL;
    var params = "?client_id="+CLIENT_ID+"&client_secret="+CLIENT_SECRET+"&code="+req.query.code;
    await fetch(url+params, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => res.json())
    .then(data => {
        res.json(data);
    });
});

app.get('/getUserData', async (req, res) =>{
    req.get('Authorization');
    var url = process.env.USER_DATA_URL;

    await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': req.get('Authorization')
        }
    }).then(res => res.json())
    .then(data => {
        res.json(data);
    });
});

app.post('/getRepos', async (req, res) =>{
    req.get('Authorization');
    var url = req.body.url;

    await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': req.get('Authorization')
        }
    }).then(res => res.json())
    .then(data => {
        res.json(data);
    });
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/dist')));
    app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, 'client', 'dist', 'index.html')
    )
  );
}


app.listen(PORT, function () {
    console.log('Listening on port ' + PORT);
});
