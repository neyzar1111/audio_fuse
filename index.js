require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const querystring = require('querystring');

const port = 8888;
// const Buffer = require('buffer');

// On JSON stringify: TypeError: Assignment to constant variable. =>https://stackoverflow.com/questions/65046136/typeerror-assignment-to-constant-variable
// change to let or create variable inside the body
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
// console.log(generateRandomString(16));

const stateKey = 'spotify_auth_state';

app.get('/login', (req, res)=> {

  // set cookie - name to value
  // https://stackoverflow.com/questions/49733714/spotifywebapi-trouble-with-authentication-authorization-code-in-nodejs
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope = 'user-read-private user-read-email';

  const queryParams = querystring.stringify({
    // SyntaxError: Invalid shorthand property initializer - https://stackoverflow.com/questions/42006503/invalid-shorthand-property-initializer
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    state: state,
    scope: scope
  });

// redirect to the spotify account service authorize url login page from http://localhost:8888/login
  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});
// https://accounts.spotify.com/en/authorize?client_id=d88b20c9c8f04ffc9482309a3210bbcc&response_type=code&redirect_uri=http:%2F%2Flocalhost:8888%2Fcallback

app.get('/callback', (req, res) => {
  // res.send('callback');
  const code = req.query.code || null;
  // console.log(code);
  // error: Illegal redirect url - https://accounts.spotify.com/authorize?client_id=d88b20c9c8f04ffc9482309a3210bbcc&response_type=code&redirect_uri=%22http://localhost:8888/callback%22&state=state&scope=scope

// Send a POST request
  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: querystring.stringify({
      grant_type: 'authorization_code',
      code: code, //param from res.query needs to stringify
      redirect_uri: REDIRECT_URI
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
  },
})
.then( response => {
  // console.log(response.data); //or .status, or .headers
  if(response.status === 200) {
   // multi request with url: https://api.spotify.com/v1/me, header with access token and token type, success
  //  Taste with http://localhost:8888/refresh_token?refresh_token=${refresh_token}
    // const {access_token, token_type} = response.data;

    const {access_token, refresh_token} = response.data;


        // redirect to react app
     res.redirect('http://localhost:3000/?${queryParamsarams}')

    // pass along tokens in query params

  // replace for test
    // axios.get(`https://api.spotify.com/v1/me`, {
    //   headers: {
    //       Authorization: `${token_type} ${access_token}`
    //   }
    // })
    // test: FAIL
    // const {refresh_token} = response.data;
    // axios.get(`http://localhost:8888/refresh_token?refresh_token=${refresh_token}`)
    // .then(response => {
    // // ERR:  Cannot set headers after they are sent to the client. Use stringify
    // res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
    // })
    // .catch (error => {
    //   res.send(error);
    //  }) 
} else {
  res.send(response);
}
}) // close then
.catch (error => {
  res.send(error);
 });
}); // close get method

// refresh token
// app.get('/refresh_token', (req, res)=> {
//   const {refresh_token} = req.query;

// axios({
//   method: 'post',
//   url: 'https://accounts.spotify.com/api/token',
//   data: querystring.stringify({
//     grant_type: 'refresh_token',
//     refresh_token: refresh_token
//   }),
//   headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
//   },
// })
// .then( response => {
// res.send(response.data);
// })
// .catch (error => {
//   res.send(error);
//  }); 
// }); // close get method


app.listen(port, ()=>{
  console.log(`express app listening at http://localhost:${port}`);
});
