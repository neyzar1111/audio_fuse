require('dotenv').config();
const express = require('express');

const app = express();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

// test on terminal
console.log(process.env.CLIENT_ID);

app.get('/', (req, res)=> {
  // res.send('hello World!');
  const data = {
    name: 'Becode',
    isAwesome: true
  };
  res.json(data);
});

app.get('/login', (req, res)=> {
// redirect to the spotify account service url login page from http://localhost:8888/login
res.redirect(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`);
});


const port = 8888;

app.listen(port, ()=>{
  console.log(`express app listening at http://localhost:${port}`);
})