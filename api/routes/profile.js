const express = require("express");
const router = express.Router();
const db = require("./firebase");
var dotenv = require("dotenv").config();

const {
  getDocs,
  collection,
  setDoc,
  doc,
  addDoc,
} = require("firebase/firestore");

let posts = [];

router.get("/info", async (req, res, next) => {
  const allDocData = [];
  // console.log(req.query)  // shows the URL params (stuff after the ? in the URL)
  const docs = await getDocs(collection(db, "profile"));
  docs.forEach((doc) => {
    const object = doc.data();
    allDocData.push(object);
  });
  res.json({ result: allDocData });
});

router.post("/userLiked", async (req, res, next) => {
  const newRef = await doc(collection(db, "profile"));
  await setDoc(newRef, { user: req.user });
  const url = "https://api.spotify.com/v1/me/tracks?offset=0&limit=10";
  const data = await fetch(url, {
    headers: {
      Authorization: "Bearer " + req.query.token,
    },
  })
    .catch((err) => console.log(err))
    .then((res) => res.json())
    .then((data) =>
      data.items.map((val, key) => {
        setDoc(doc("profile", "", "likedSongs"), {
          title: val.track.name,
        });
      })
    );
  return "hello!";
});

module.exports = router;
