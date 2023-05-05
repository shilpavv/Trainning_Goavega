const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//Bring  User models
let User = require("../models/user");

//Register Form
router.get("/register", (req, res) => {
  res.render("register");
});

//Register Process
router.post("/register", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;

  req.checkBody("name", "Name is Required").notEmpty();
  req.checkBody("email", "Email is Required").notEmpty();
  req.checkBody("email", "Email is not Valid").isEmail();
  req.checkBody("username", "Username is Required").notEmpty();
  req.checkBody("password", "Password is Required").notEmpty();
  req.checkBody("password2", "Passwords do not match").equals(req.body.password);

  let errors = req.validationErrors();
  if (errors) {
    res.render("register", {
      errors: errors,
    });
  } else {
    try {
      let newUser = new User({
        name: name,
        email: email,
        username: username,
        password: password,
      });

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(newUser.password, salt);
      newUser.password = hash;
      await newUser.save();

      req.flash('success', "you are now registered")
      res.redirect('/users/login')
    } catch (err) {
      console.log(err)
    }
  }
});

//login form
router.get("/login", (req, res) => {
  res.render("login")
});

//Login Process
router.post('/login', function (req, res, next) {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

//Logout
router.get('/logout', function (req, res) {
  req.logout(function(err) {
    if (err) {
      throw err
    }
    req.flash("success", "you are logged out")
    res.redirect('/')
  });
});
module.exports = router;
