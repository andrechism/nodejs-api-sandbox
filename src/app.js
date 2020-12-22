const path = require('path');
const express = require('express');
const app = express();

const morgan = require('morgan');
// const middlewares = require('./middlewares');
const routes = require('./routes');
const fileRoutes = require('./routes/fileRoutes');


app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api', routes);
app.use(morgan('dev'));


module.exports = app;