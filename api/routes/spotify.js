var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");
const db = require("./firebase");

const {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc
} = require("firebase/firestore");

const client_id = process.env.clientId;
const client_secret = process.env.clientSecret;
const redirect_uri = process.env.redirectURI;
const scope = "user-top-read user-library-read"; //<- needs to be updated based on what you want to dogit

router.get("/", async (req, res, next) => {
  try {
    const url =
      "https://accounts.spotify.com/authorize?client_id=" +
      client_id +
      "&response_type=code&redirect_uri=" +
      redirect_uri +
      "&scope=" +
      scope;
    res.status(200).json({ url: url });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/messages", async (req, res, next) => {
  const messages = [];
  const docs = await getDocs(collection(db, "profile", "K5icETWXzFDdLp0WlqqR", "messengers", req.query.id, "messages"));
  docs.forEach((message) =>
    messages.push({ ...message.data() })
  );
  console.log(messages);
  res.json({ result: messages });
});

router.get("/messengers", async (req, res, next) => {
  const messages = [];
  const docs = await getDocs(collection(db, "profile", "K5icETWXzFDdLp0WlqqR", "messengers"));
  docs.forEach((message) =>
    messages.push({ id: message.id })
  );
  console.log(messages);
  res.json({ result: messages });
});

router.get("/callback", async (req, res, next) => {
  try {
    const code = req.query.code;
    const url =
      "https://accounts.spotify.com/api/token?grant_type=authorization_code&code=" + code + "&redirect_uri=" + redirect_uri;
    const headers = {
      "Authorization":
        "Basic " +
        Buffer.from(client_id + ":" + client_secret, "utf8").toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    };
    fetch(url, { method: "post", headers: headers })
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => {
        obj = {
          token: data.access_token,
        };
        return obj;
      })
      .then((obj) => res.json(obj));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
