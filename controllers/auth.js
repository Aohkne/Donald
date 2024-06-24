const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

exports.login = (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length === 0) {
        return res.render("login", {
          message: "Email or password is incorrect",
        });
      }

      const user = results[0];

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.render("login", {
          message: "Email or password is incorrect",
        });
      }

      // Assuming a session management system is in place
      req.session.userId = user.id;
      req.session.userName = user.name;

      res.render("login", {
        message: "Login successful",
      });
    }
  );
};

exports.register = (req, res) => {
  console.log("req.body");

  const { username, email, password, passwordConfirm } = req.body;

  db.query(
    "select email FROM users where email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        return res.render("register", {
          message: "That email is already in use",
        });
      } else if (password !== passwordConfirm) {
        return res.render("register", {
          message: "Passwords do not match",
        });
      }

      let hashedPassword = await bcrypt.hash(password, 8);
      console.log(hashedPassword);

      db.query(
        "insert into users set ? ",
        { name: username, email: email, password: hashedPassword },
        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            console.log(results);
            return res.render("register", {
              message: "User registered",
            });
          }
        }
      );
    }
  );
};
