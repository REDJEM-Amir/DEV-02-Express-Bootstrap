'use strict';

const express = require('express')
const mustache = require('mustache-express');
const anime = require('animejs');

const app = express()

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', './views');
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(8000, () => console.log('Application Web ! http://localhost:3000'));

