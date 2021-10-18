require('dotenv').config();
const express = require('express');
const app = express();
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

// obeserve terminal
console.log(generateRandomString(16));

app.get('/login', (req, res)=> {

// redirect to the spotify account service url login page from http://localhost:8888/login
res.redirect(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`);
});
// https://accounts.spotify.com/en/authorize?client_id=d88b20c9c8f04ffc9482309a3210bbcc&response_type=code&redirect_uri=http:%2F%2Flocalhost:8888%2Fcallback

app.listen(port, ()=>{
  console.log(`express app listening at http://localhost:${port}`);
})