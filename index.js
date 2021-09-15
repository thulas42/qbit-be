const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const axios = require('axios');
const { apiKey} = require('./config');

app.get('/currencies', (req, res, next) => {

    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    axios.get(`http://data.fixer.io/api/latest?access_key=${apiKey}`,
        { responseType: 'json' })
        .then(response => {
            res.status(200).send(JSON.stringify(response.data))
        })
        .catch((error) => {
            res.status(400).send(error.message || error);
        })
    })

app.listen(port, () => {
    console.log(`app listening at port ${port}`)
})