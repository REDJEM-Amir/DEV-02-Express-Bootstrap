'use strict';

const express = require('express')
const mustache = require('mustache-express');

const app = express()

app.use(express.urlencoded({ extended: true }));

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', './views');
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, () => console.log('Application Web ! http://localhost:3000'));

