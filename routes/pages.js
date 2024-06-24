const express = require("express");
const router = express.Router();

const database = require("../server");
const session = require("express-session");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", session: req.session });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/course", (req, res) => {
  res.render("course");
});

module.exports = router;
