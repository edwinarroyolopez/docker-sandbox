const express = require('express');
const morgan = require('morgan'); // morgan => Permite ver por consola las peticiones http
const app = express();

app.use(morgan('dev'))
app.use(require('./routes/index'))



module.exports = app;