const express = require('express');

const app = express();

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