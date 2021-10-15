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

app.get('/awesome-generator', (req, res)=> {
  // res.send('hello World!');

  // http://localhost:8888/awesome-generator/?name=anna&isAwesome=true
  const {name, isAwesome} = req.query;
  res.send(`${name} is ${JSON.parse(isAwesome) ? 'really' : 'not'} awesome`);
});

const port = 8888;

app.listen(port, ()=>{
  console.log(`express app listening at http://localhost:${port}`);
})