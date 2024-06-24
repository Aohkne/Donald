const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");
const session = require("express-session");
dotenv.config({ path: "./.env" });

const app = express();
app.use(
  session({
    secret: "webslesson",
    resave: true,
    saveUninitialized: true,
  })
);

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Connected to database");
  }
});

module.exports = db;

// Set public directory for static files
const publicDirectory = path.join(__dirname, "/public");
app.use(express.static(publicDirectory));
app.use("/css", express.static(path.join(__dirname, "public/asset/css")));

// Parse URL encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Parse JSON encoded bodies (as sent by API client)
app.use(express.json());

// Set views directory and view engine
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// Define Routes
app.use("/", require("./routes/pages.js"));
app.use("/auth", require("./routes/auth.js"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
