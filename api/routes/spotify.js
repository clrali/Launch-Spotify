var express = require('express');
var router = express.Router();
const db = require("./firebase")

const {getDocs, collection} = require("firebase/firestore")

// router.get('/profile', async function(req, res, next) {
//     const bios = []
//     const artists = []
//     const docs = await getDocs(collection(db, "profile"))
//     docs.forEach((doc) => {
//         bios.push(doc.data().bio)
//         artists.push(doc.data().artists)
//     })
//     res.json({bios: bios, artists: artists})
// });

var SpotifyWebApi = require('spotify-web-api-node');
scopes = ['user-read-private', 'user-read-email','playlist-modify-public','playlist-modify-private']

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  redirectUri: process.env.redirectURI,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req,res) => {
  var html = spotifyApi.createAuthorizeURL(scopes)
  console.log(html)
  res.send(html+"&show_dialog=true")  
})

// router.get('/callback', async (req,res) => {
//   const { code } = req.query;
//   console.log(code)
//   try {
//     var data = await spotifyApi.authorizationCodeGrant(code)
//     const { access_token, refresh_token } = data.body;
//     spotifyApi.setAccessToken(access_token);
//     spotifyApi.setRefreshToken(refresh_token);

//     res.redirect('http://localhost:3001/home');
//   } catch(err) {
//     res.redirect('/#/error/invalid token');
//   }
// });

module.exports = router;