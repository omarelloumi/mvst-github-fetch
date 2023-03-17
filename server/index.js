// Import required libraries and modules
var express = require('express'); // For creating server and routing
var dotenv = require('dotenv').config(); // For loading environment variables from .env file
var cors = require('cors'); // For enabling Cross-Origin Resource Sharing (CORS) support
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); // For making HTTP requests
var bodyParser = require('body-parser'); // For parsing request bodies
const path = require('path'); // For resolving file paths

// Set up environment variables and constants
const PORT = process.env.PORT || 5000; // Set default port to 5000 or use the one specified in the environment variable
const CLIENT_ID = process.env.CLIENT_ID; // Set the client ID from environment variable
const CLIENT_SECRET = process.env.CLIENT_SECRET; // Set the client secret from environment variable

// Create an instance of the express application
var app = express();

// Set up middleware to enable CORS and parse request body as JSON
app.use(cors());
app.use(bodyParser.json());

// Route for getting access token
app.get('/getAccessToken', async (req, res) =>{
    // Extract the authorization code from the request query parameters
    req.query.code;

    // Build the URL and query parameters for requesting access token from GitHub API
    var url = "https://github.com/login/oauth/access_token";
    var params = "?client_id="+CLIENT_ID+"&client_secret="+CLIENT_SECRET+"&code="+req.query.code;

    // Make an HTTP POST request to the GitHub API for access token
    await fetch(url+params, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => res.json())
    .then(data => {
        // Send the access token as response
        res.json(data);
    });
});

// Route for getting user data
app.get('/getUserData', async (req, res) =>{
    // Extract the authorization header from the request
    req.get('Authorization');

    // Get the URL for requesting user data from environment variable
    var url = process.env.USER_DATA_URL;

    // Make an HTTP GET request to the user data URL with authorization header
    await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': req.get('Authorization')
        }
    }).then(res => res.json())
    .then(data => {
        // Send the user data as response
        res.json(data);
    });
});

// Route for getting repositories
app.post('/getRepos', async (req, res) =>{
    // Extract the authorization header from the request
    req.get('Authorization');

    // Get the URL for requesting repositories from the request body
    var url = req.body.url;

    // Make an HTTP GET request to the repository URL with authorization header
    await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': req.get('Authorization')
        }
    }).then(res => res.json())
    .then(data => {
        // Send the repositories as response
        res.json(data);
    });
});

// Start the server and listen on the specified port
app.listen(PORT, function () {
    console.log('Listening on port ' + PORT);
});
