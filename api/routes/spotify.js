var express = require('express');
var router = express.Router();
const db = require("./firebase")

const {getDocs, collection} = require("firebase/firestore")

var SpotifyWebApi = require('spotify-web-api-node');
scopes = [
    'user-read-private', 
    'user-read-email',
    'playlist-modify-public',
    'playlist-modify-private', 
    'user-top-read',
    'user-read-recently-played']

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  redirectUri: process.env.redirectURI,
});

router.get('/login', (req, res) => {
    var html = spotifyApi.createAuthorizeURL(scopes)
    res.send(html + "&show_dialog=true")  
});

router.get('/playlists', async (req, res) => {
    try {
        var response = await spotifyApi.getUserPlaylists();
        console.log(response.body)
        res.status(200).send(response.body)
    } catch (e) {
        res.status(400).send(e)
    }
}) 

module.exports = router;