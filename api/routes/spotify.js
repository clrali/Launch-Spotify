var express = require('express');
var router = express.Router();
const db = require("./firebase")

const {getDocs, collection} = require("firebase/firestore")

router.get('/profile', async function(req, res, next) {
    const bios = []
    const artists = []
    const docs = await getDocs(collection(db, "profile"))
    docs.forEach((doc) => {
        bios.push(doc.data().bio)
        artists.push(doc.data().artists)
    })
    res.json({bios: bios, artists: artists})
});

module.exports = router;