// express web server
var express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.johnRoute);
app.get('/jane', lesson1Controller.janeRoute);

const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.port || port));