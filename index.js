require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const port = 8888;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

// test on terminal
// console.log(process.env.CLIENT_ID);

app.get('/', (req, res)=> {
  // res.send('hello World!');
  const data = {
    name: 'Becode',
    isAwesome: true
  };
  res.json(data);
});

/**
 * Generate a random string containing numbers and letters
 * @param {number} length The length of the string
 * @return {string} The generated string
 */

const generateRandomString = length => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for(let i = 0; i < length; i++ ) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

// observe terminal
console.log(generateRandomString(16));

const stateKey = 'spotify_auth_state';

app.get('/login', (req, res)=> {

  // set cookie - name to value
  // https://stackoverflow.com/questions/49733714/spotifywebapi-trouble-with-authentication-authorization-code-in-nodejs
const state = generateRandomString(16);
res.cookie(stateKey, state);

const scope = 'user-read-private user-read-email';
// TODO: Add state and scope params

// redirect to the spotify account service authorize url login page from http://localhost:8888/login
res.redirect(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`);
});
// https://accounts.spotify.com/en/authorize?client_id=d88b20c9c8f04ffc9482309a3210bbcc&response_type=code&redirect_uri=http:%2F%2Flocalhost:8888%2Fcallback

app.get('/callback', (req, res) => {
  res.send('callback');
})

app.listen(port, ()=>{
  console.log(`express app listening at http://localhost:${port}`);
})