const request = require('request');

request({
  url: 'https://www.naver.com',
  method: 'GET',
}, (error, response, body) => console.log(body));
