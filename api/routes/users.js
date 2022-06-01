var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var auth = require('./spotify')
var dotenv = require('dotenv').config()

router.get('/', async (req, res, next) => {
    try{
        console.log("req.query.token: ", req.query.token)
        const url = 'https://api.spotify.com/v1/me/tracks?offset=0&limit=5'
        const data = await fetch(url, {headers: {
            'Authorization': 'Bearer ' + req.query.token
        }}).catch(err=> console.log(err))
            .then(res=> res.json())
            .then(data => data)

        return res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

module.exports = router;
