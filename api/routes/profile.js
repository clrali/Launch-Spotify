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


module.exports = router;
