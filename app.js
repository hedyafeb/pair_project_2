const express = require('express');
const app = express()
const routes = require('./routes'); 
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes);

app.listen(port, () => {
    console.log(`listening on port ${port}`); 
})