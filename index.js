const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const axios = require('axios');

app.get('/currencies', (req, res, next) => {
    
    try {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      axios.get(`http://data.fixer.io/api/latest?access_key=0bdc6b2ee9ebb3811b9c02a31313ae31&format=1`)
        .then(response =>{
            res.status(200).send( response.data)
        })
        return;
    } catch (error) {
        res.status(400).send(error.message || error);
    }
})

app.listen(port, () => {
    console.log(`app listening at port ${port}`)
})